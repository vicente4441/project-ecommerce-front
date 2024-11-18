import React, { useState, useEffect } from 'react';
import { Home, PublicationsContainer } from './styles'
import { Menu } from '../../components/Specific/Menu/Menu';
import { getCategories } from '../../services/categories';
import { useSearchParams } from 'react-router-dom';
import { getAllPublications } from '../../services/publication';
import { AxiosError } from 'axios';
import { RenderPublicationsEmpty } from '../../components/Global/RenderPublicationsEmpty/RenderPublicationsEmpty';
import { Loading } from '../../components/Global/Loading/Loading';
import { RenderPublications } from '../../components/Global/RenderPublications/RenderPublications';
import { PaginationComponent } from '../../components/Global/Pagination/PaginationComponent';

export const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [publications, setPublications] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [countPagination, setCountPagination] = useState(0);
  const initialPrice = searchParams.get('initialPrice') || '';
  const finalPrice = searchParams.get('finalPrice') || '';
  const categorie = searchParams.get('categorie') || '';
  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || 1;
  const itemPerPage = 6;
  let render;

  const fetchCategories = async () => {
    const results = await getCategories();
    setCategories(results.data);
  };

  const fetchPublications = async () => {
    setLoading(true)
    const results = await getAllPublications(search, categorie, initialPrice, finalPrice, (page ? page - 1 : page));

    if(results && !(results instanceof AxiosError)){
      const average = Math.ceil(results.data.count / itemPerPage);
  
      setCountPagination(average);
      setPublications(results.data.data);
    }else{
      console.log(results)
    }
    setLoading(false)
  };

  const handleSearch = (search) => {
    setSearchParams({search});

    if(!search) {
      searchParams.delete('search');
      setSearchParams(searchParams);
    };
  };

  const handleCategories = (categorie) => {
    let obj = {};

    searchParams.forEach((value, key) => {
      obj[key] = value
    });

    setSearchParams({...obj, categorie});

    if(!categorie) {
      searchParams.delete('categorie');
      setSearchParams(searchParams);
    };
  };

  const handlePrice = (initialPrice, finalPrice) => {
    let obj = {};

    searchParams.forEach((value, key) => {
      obj[key] = value
    });

    setSearchParams({...obj, initialPrice, finalPrice});

    if(!initialPrice){
      searchParams.delete('initialPrice');
      setSearchParams(searchParams);
    }

    if(!finalPrice){
      searchParams.delete('finalPrice');
      setSearchParams(searchParams);
    }
  };

  const handlePagination = (e, page) => {
    let obj = {};

    searchParams.forEach((value, key) => {
      obj[key] = value;
    });

    setSearchParams({...obj, page});
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  
  useEffect(() => {
    fetchPublications();
  }, [search, categorie, initialPrice, finalPrice, page]);

  if(loading){
    render = <Loading/>
  }else if(publications.length > 0){
    render = <RenderPublications publications={publications}/>
  }else{
    render = <RenderPublicationsEmpty text='No publications'/>
  };

  return (
  <Home>
    <Menu categories={categories} handleCategories={handleCategories} handlePrice={handlePrice} handleSearch={handleSearch}/>
    <PublicationsContainer>
      {render}
      <PaginationComponent page={page} handlePagination={handlePagination} count={countPagination}/>
    </PublicationsContainer>
  </Home>)
};

