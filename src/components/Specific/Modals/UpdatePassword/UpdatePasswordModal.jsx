import Modal from 'react-modal';
import { UpdatePasswordModalButton, UpdatePasswordModalContainer, UpdatePasswordModalTitle } from "./styles";
import { Input } from '../../../Global/Input/Input';
import { useState } from "react";
import { LoadingButton } from '../../../Global/LoadingButton/LoadingButton';

export const UpdatePasswordModal = ({ isOpen, handleModal, handleSubmit, loading }) => {
  const [password, setPassword] = useState('');

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

  const handleSubmitPassword = () => {
    handleSubmit(password)
  };

  return (<Modal isOpen={isOpen} onRequestClose={handleModal} style={customStyles}>
    <UpdatePasswordModalContainer>
      <UpdatePasswordModalTitle>Update password</UpdatePasswordModalTitle>
      <Input label='Password' placeholder='Password' value={password} setValue={setPassword}/>
      {loading ? <LoadingButton/> : <UpdatePasswordModalButton onClick={handleSubmitPassword}>Update</UpdatePasswordModalButton>}
    </UpdatePasswordModalContainer>
  </Modal>
  )
};