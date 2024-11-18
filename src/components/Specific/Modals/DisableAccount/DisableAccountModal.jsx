import { LoadingButton } from "../../../Global/LoadingButton/LoadingButton";
import { DisableAccountButton, DisableAccountModalContainer, DisableAccountModalSubTitle, DisableAccountModalTitle } from "./styles";
import Modal from 'react-modal';

export const DisableAccountModal = ({ isOpen, handleModal, handleSubmit, loading }) => {
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
    <DisableAccountModalContainer>
      <DisableAccountModalTitle>Suspend account</DisableAccountModalTitle>
      <DisableAccountModalSubTitle>¿Are your sure?</DisableAccountModalSubTitle>
      {loading ? <LoadingButton/> : <DisableAccountButton onClick={handleSubmit}>Suspend</DisableAccountButton>}
    </DisableAccountModalContainer>
  </Modal>)
};