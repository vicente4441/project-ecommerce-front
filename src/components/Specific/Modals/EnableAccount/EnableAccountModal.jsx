import { LoadingButton } from "../../../Global/LoadingButton/LoadingButton";
import { EnableAccountButton, EnableAccountModalContainer, EnableAccountModalSubTitle, EnableAccountModalTitle } from "./styles"
import Modal from 'react-modal';

export const EnableAccountModal = ({ isOpen, handleModal, handleSubmit, loading }) => {
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
    <EnableAccountModalContainer>
      <EnableAccountModalTitle>Enable account</EnableAccountModalTitle>
      <EnableAccountModalSubTitle>You will re-enable your account</EnableAccountModalSubTitle>
      {loading ? <LoadingButton/> : <EnableAccountButton onClick={handleSubmit}>Enable</EnableAccountButton>}
    </EnableAccountModalContainer>
  </Modal>
  )
};