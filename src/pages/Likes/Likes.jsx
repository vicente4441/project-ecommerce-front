import { useEffect, useState } from "react";
import { getLikedPublications } from "../../services/publication";
import { LikesContainer, LikesEmpty, Publications, PublicationsContainer } from "./style";
import { Publication } from "../../components/Global/Publication/Publication";
import { Menu } from "../../components/Specific/Menu/Menu";
import { useSearchParams } from "react-router-dom";
import { getCategories } from '../../services/categories';
import { AxiosError } from "axios";
import { PaginationComponent } from "../../components/Global/Pagination/PaginationComponent";
import { Loading } from "../../components/Global/Loading/Loading";
import { RenderPublications } from "../../components/Global/RenderPublications/RenderPublications";
import { RenderPublicationsEmpty } from "../../components/Global/RenderPublicationsEmpty/RenderPublicationsEmpty";

export const Likes = () => {
  const [publications, setPublications] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [countPagination, setCountPagination] = useState(0);
  const [loading, setLoading] = useState(true);
  const search = searchParams.get('search') || '';
  const categorie = searchParams.get('categorie') || '';
  const initialPrice = searchParams.get('initialPrice') || '';
  const finalPrice = searchParams.get('finalPrice') || '';
  const page = searchParams.get('page') || 1;
  const itemPerPage = 6;
  let render;

  const fetchGetPublications = async () => {
    setLoading(true)
    const results = await getLikedPublications(search, categorie, initialPrice, finalPrice, (page ? page - 1 : page));

    if(results && !(results instanceof AxiosError)){
      const average = Math.ceil(results.data.count / itemPerPage);

      setCountPagination(average);
      setPublications(results.data.data);
    }else{
      console.log(results);
    };
    setLoading(false)
  };

  const fetchGetCategories = async () => {
    const results = await getCategories();

    setCategories(results.data);
  };

  const handleSearch = (search) => {
    setSearchParams({search});

    if(!search){
      searchParams.delete('search');

      setSearchParams(searchParams);
    };
  }

  const handleCategories = (categorie) => {
    let obj = {};
    
    searchParams.forEach((value, key) => {
      obj[key] = value;  
    });

    setSearchParams({...obj, categorie});

    if(!categorie){
      searchParams.delete('categorie');

      setSearchParams(searchParams);
    };
  };

  const handlePrice = (initialPrice, finalPrice) => {
    let obj = {};
    
    searchParams.forEach((value, key) => {
      obj[key] = value;
    });

    setSearchParams({...obj, initialPrice, finalPrice});

    if(!initialPrice){
      searchParams.delete('initialPrice');
      
      setSearchParams(searchParams);
    };

    if(!finalPrice){
      searchParams.delete('finalPrice');

      setSearchParams(searchParams);
    };
  };

  const handlePagination = (e, page) => {
    let obj = {};

    searchParams.forEach((value, key) => {
      obj[key] = value;
    });

    setSearchParams({...obj, page});
  };

  useEffect(() => {
    fetchGetCategories();
  }, []);

  useEffect(() => {
    fetchGetPublications();
  }, [search, categorie, initialPrice, finalPrice, page]);

  if(loading){
    render = <Loading/>
  }else if(publications.length > 0){
    render = <RenderPublications publications={publications}/>
  }else{
    render = <RenderPublicationsEmpty text='No publications'/>
  }

  return (<LikesContainer>
    <Menu categories={categories} handleSearch={handleSearch} handlePrice={handlePrice} handleCategories={handleCategories}/>
    <PublicationsContainer>
      {render}
      <PaginationComponent count={countPagination} page={page} handlePagination={handlePagination}/>
    </PublicationsContainer>
  </LikesContainer>)
};