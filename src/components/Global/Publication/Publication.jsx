import React from 'react';
import { PublicationContainer } from './styles';
import { Footer } from './Footer/Footer';
import { Body } from './Body/Body';
import { Header } from './Header/Header';
import { useNavigate } from 'react-router-dom';

export const Publication = ({id, title, description, price, quantity, categorie, user, type, reqName, reqItem, idUser, like, offerFinalized}) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/publication/${id}`)
  };
  
  return (
  <PublicationContainer>
    <Header title={title} like={like} offerFinalized={offerFinalized}/>
    <Body description={description} price={price} quantity={quantity} categorie={categorie} type={type}  reqName={reqName} reqItem={reqItem}/>
    <Footer user={user} reqItem={reqItem} handleView={handleView} idUser={idUser}/>
  </PublicationContainer>)
}