import Modal from 'react-modal';
import { UpdateUsernameModalButton, UpdateUsernameModalContainer, UpdateUsernameModalTitle } from './styles';
import { Input } from '../../../Global/Input/Input';
import { useState } from 'react';
import { LoadingButton } from '../../../Global/LoadingButton/LoadingButton'

export const UpdateUsernameModal = ({ isOpen, handleModal, handleSubmit, loading }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

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

  const handleSubmitUsername = () => {
    const obj = {
      name,
      lastName
    }

    handleSubmit(obj);
  }

  return (<Modal isOpen={isOpen} onRequestClose={handleModal} style={customStyles}>
    <UpdateUsernameModalContainer>
      <UpdateUsernameModalTitle>Update username</UpdateUsernameModalTitle>
      <Input label='Name' placeholder='Name' value={name} setValue={setName}/>
      <Input label='Last name' placeholder='Last name' value={lastName} setValue={setLastName}/>
      {loading ? <LoadingButton/> : <UpdateUsernameModalButton onClick={handleSubmitUsername}>Update</UpdateUsernameModalButton>}
    </UpdateUsernameModalContainer>
  </Modal>)
}