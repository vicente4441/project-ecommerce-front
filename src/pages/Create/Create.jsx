import React, { useEffect, useState } from 'react';
import { Button, CreateContainer, CreatePublication, DescriptionCreateContainer, DescriptionPublication, DescriptionPublicationTitle } from './styles';
import { Publication } from '../../components/Global/Publication/Publication';
import { useDispatch, useSelector } from 'react-redux';
import { AxiosError } from 'axios';
import { getCategories } from '../../services/categories';
import { getTypes } from '../../services/types';
import { CreatePublicationForm } from '../../components/Specific/CreatePublicationForm/CreatePublicationForm';
import { createPublication } from '../../services/publication';
import { showPopupAdvice } from '../../redux/slices/popup';
import { LoadingButton } from '../../components/Global/LoadingButton/LoadingButton';

export const Create = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [categorie, setCategorie] = useState({});
  const [type, setType] = useState({});
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [description, setDescription] = useState('');
  const [reqName, setReqName] = useState('');
  const [reqQuantity, setReqQuantity] = useState(1);
  const [reqDescription, setReqDescription] = useState('');
  const [reqCategorie, setReqCategorie] = useState([]);
  const [reqPrice, setReqPrice] = useState(0);
  const [isMainForm, setIsMainForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const { auth: { user } } = useSelector(state => state);
  const dispatch = useDispatch();
  let renderButtons;

  const fetchGetTypes = async () => {
    const results = await getTypes();
    const newResults = [];
    results.data.forEach(result => {
      let obj = {
        value: result.id,
        label: result.name
      }
      newResults.push(obj);
    });

    setTypes(newResults);    
  } 

  const fetchGetCategories = async () => {
    const results = await getCategories();
    const newResults = [];
    results.data.forEach(result => {
      let obj = {
        value: result.id,
        label: result.name
      }
      newResults.push(obj);
    });

    setCategories(newResults);
  };

  const handleIsMainForm = async (e) => {
    e.preventDefault();
    setIsMainForm(!isMainForm)
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    setLoading(true)

    const obj = {
      name,
      price: parseInt(price),
      quantity: parseInt(quantity),
      idCategorie: categorie.value,
      idType: type.value,
      description,
      reqName,
      reqQuantity: parseInt(reqQuantity),
      reqPrice: parseInt(reqPrice),
      reqIdCategorie: reqCategorie.value,
      reqDescription
    };

    const results = await createPublication(obj)

    if(results && !(results instanceof AxiosError)){
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }));
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }));
    };
    setLoading(false)
  };

  useEffect(() => {
    fetchGetCategories();
    fetchGetTypes();
  }, []);

  if(loading){
    renderButtons = <LoadingButton/>;
  }else if(type?.value === 3){
    renderButtons = <>
      <Button onClick={(e) => handleCreate(e)}>Create</Button>
      <Button onClick={handleIsMainForm}>{isMainForm ? 'Other item' : 'Back'}</Button>
    </>
  }else if(isMainForm){
    renderButtons = <Button onClick={(e) => handleCreate(e)}>Create</Button>
  };
  
  return (
  <CreateContainer>
    <DescriptionCreateContainer>
      <DescriptionPublication>
        <div>
          <DescriptionPublicationTitle>Your item</DescriptionPublicationTitle>
          <Publication title={name} price={price} quantity={quantity} user={user.name} categorie={categorie.label} type={type.label} description={description}/>
        </div>
        {type?.value === 3 && <>
          <i className="bi bi-arrow-left-right"></i>
        <div>
          <DescriptionPublicationTitle>Other item</DescriptionPublicationTitle>
          <Publication title={reqName} price={reqPrice} quantity={reqQuantity} categorie={reqCategorie.label} description={reqDescription} reqItem={true}/>
        </div>
        </>
        }
      </DescriptionPublication>
      <CreatePublication>
        {isMainForm ? <CreatePublicationForm name={name} setName={setName} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} categorie={categorie} setCategorie={setCategorie} listCategories={categories} type={type} setType={setType} description={description} setDescription={setDescription} listTypes={types} isMainForm={isMainForm}/> : <CreatePublicationForm name={reqName} setName={setReqName} quantity={reqQuantity} description={reqDescription} setDescription={setReqDescription} price={reqPrice} setPrice={setReqPrice} categorie={reqCategorie} setCategorie={setReqCategorie} setQuantity={setReqQuantity} listCategories={categories} isMainForm={isMainForm}/>}
        {renderButtons}
      </CreatePublication>
    </DescriptionCreateContainer>
  </CreateContainer>)
};