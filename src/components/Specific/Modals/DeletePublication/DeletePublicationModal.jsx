import Modal from 'react-modal';
import { DeletePublicationModalButton, DeletePublicationModalContainer, DeletePublicationModalSubTitle, DeletePublicationModalTitle } from './styles';
import { LoadingButton } from '../../../Global/LoadingButton/LoadingButton';

export const DeletePublicationModal = ({ isOpen, handleModal, handleSubmit, loading }) => {
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

  return (<Modal isOpen={isOpen} onRequestClose={handleModal} style={customStyles}>
    <DeletePublicationModalContainer>
      <DeletePublicationModalTitle>Delete publication</DeletePublicationModalTitle>
      <DeletePublicationModalSubTitle>¿Are your sure?</DeletePublicationModalSubTitle>
      {loading ? <LoadingButton/> : <DeletePublicationModalButton onClick={handleSubmit}>Delete</DeletePublicationModalButton>}
    </DeletePublicationModalContainer>
  </Modal>)
};