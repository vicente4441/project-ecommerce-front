import { format } from "date-fns";
import {  PublicationAdvice, PublicationButtonsContainer, PublicationMade, PublicationStars, PublicationStarsContainer, PublicationStarsMadeContainer, PublicationUserButton, PublicationUserContainer, PublicationUserName } from "./styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { LoadingButton } from "../LoadingButton/LoadingButton";

export const PublicationUser = ({ name, lastName, createdAt, id, edit, liked, stars, transactions, type, handleEdit, handleSubmitUpdate, handleShowDeletePublication, handleShowMakeOffer, handleSubmitLike, handleDeleteLike, handleShowCreateOffer, offerFinalized, loadingUpdate, loadingLike }) => {
  const token = Cookies.get('token');
  const { auth: { user } } = useSelector(state => state);
  let render;

  if(loadingLike){
    render = <LoadingButton/>
  }else if(offerFinalized){
    render = <PublicationAdvice>Offer finalized</PublicationAdvice>
  }else if(token && id !== user?.id){
    render = <PublicationButtonsContainer>
        {liked ? <PublicationUserButton onClick={handleDeleteLike}><i class="bi bi-hand-thumbs-up-fill"></i> Like</PublicationUserButton> : <PublicationUserButton onClick={handleSubmitLike}><i class="bi bi-hand-thumbs-up"></i> Like</PublicationUserButton>}
        <PublicationUserButton onClick={type.value === 2 ? handleShowCreateOffer : handleShowMakeOffer}>{'Send offer'}</PublicationUserButton>
    </PublicationButtonsContainer>
  }else if(token && id === user?.id){
    render = 
    <PublicationButtonsContainer>
      <PublicationUserButton onClick={edit ? handleSubmitUpdate : handleEdit}>{edit ? 'Save' : 'Edit'}</PublicationUserButton>
      <PublicationUserButton onClick={handleShowDeletePublication}>Delete</PublicationUserButton>
    </PublicationButtonsContainer>
  }

  return (<PublicationUserContainer>
    <PublicationUserName>Published by <span><Link to={`/profile/${id}`}>{name} {lastName} </Link></span></PublicationUserName>
    <PublicationStarsMadeContainer>
      <PublicationStarsContainer>
        <span>Reviews:</span>
        <PublicationStars>
          {Array.from({ length: stars }, () => <i class="bi bi-star-fill"></i>)} 
        </PublicationStars>
      </PublicationStarsContainer>
      <PublicationMade>
        Posted: 
        <span>
          {format(new Date(createdAt), "dd-MM-yyyy")}
        </span>
      </PublicationMade>
      <PublicationMade>
        Transactions realized: 
        <span>
          {transactions}
        </span>
      </PublicationMade>
    </PublicationStarsMadeContainer>
    {render}
  </PublicationUserContainer>)
};