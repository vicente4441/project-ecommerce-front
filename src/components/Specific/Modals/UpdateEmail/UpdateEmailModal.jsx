import Modal from 'react-modal';
import { UpdateEmailModalButton, UpdateEmailModalContainer, UpdateEmailModalTitle } from "./styles";
import { Input } from '../../../Global/Input/Input';
import { useState } from 'react';
import { LoadingButton } from '../../../Global/LoadingButton/LoadingButton';


export const UpdateEmailModal = ({ isOpen, handleModal, handleSubmit, loading }) => {
  const [email, setEmail] = useState('');

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

  const handleSubmitEmail = () => {
    handleSubmit(email)
  }

  return (<Modal isOpen={isOpen} onRequestClose={handleModal} style={customStyles}>
    <UpdateEmailModalContainer>
      <UpdateEmailModalTitle>Update email</UpdateEmailModalTitle>
      <Input label='Email' placeholder='Email' value={email} setValue={setEmail}/>
      {loading ? <LoadingButton/> : <UpdateEmailModalButton onClick={handleSubmitEmail}>Update</UpdateEmailModalButton>}
    </UpdateEmailModalContainer>
  </Modal>)
};