import Modal from 'react-modal';
import { CreateReviewModalButton, CreateReviewModalContainer, CreateReviewModalSubtitle, CreateReviewModalTitle, Stars } from './styles';
import { Textarea } from '../../../Global/Textarea/Textarea';
import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';
import { LoadingButton } from '../../../Global/LoadingButton/LoadingButton';

export const CreateReviewModal = ({ isOpen, handleModal, handleSubmit, loading }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const customStyles = {
    overlay: {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     zIndex: '2'
    },
    content: {
      position: 'static',
      minWidth: '40vw',
      maxWidth: '95vw'
    }
  };

  const handleSubmitReview = () => {
    const obj = {
      rating,
      comment
    };

    handleSubmit(obj)
  };

  const handleRating = (rating) => setRating(rating);

  return (<Modal isOpen={isOpen} onRequestClose={handleModal} style={customStyles}>
    <CreateReviewModalContainer>
      <CreateReviewModalTitle>Reseña a este usuario</CreateReviewModalTitle>
      <CreateReviewModalSubtitle>Puntea a este usuario</CreateReviewModalSubtitle>
      <Rating SVGstyle={{height: '1.4em'}} fillStyle={{color: '#3483fa'}} initialValue={rating} onClick={handleRating}/>
      <Textarea label='Escribe un comentario' placeholder='Comentario' rows={5} value={comment} setValue={setComment}/>
      {loading ? <LoadingButton/> : <CreateReviewModalButton onClick={handleSubmitReview}>Create</CreateReviewModalButton>}
    </CreateReviewModalContainer>
  </Modal>)
}