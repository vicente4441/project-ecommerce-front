import { LoadingButton } from "../../../Global/LoadingButton/LoadingButton";
import { MakeOfferModalButton, MakeOfferModalContainer, MakeOfferModalDescription, MakeOfferModalTitle } from "./styles"
import Modal from 'react-modal'

export const MakeOfferModal = ({ isOpen, handleModal, handleSubmit, name, typeOffer, item, reqItem, price, loading }) => {
  let render;

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

  if(typeOffer === 1){
    render = <MakeOfferModalDescription>The offer is free</MakeOfferModalDescription>
  }else if(typeOffer === 3){
    render = <MakeOfferModalDescription>The offer is <span>{item}</span> per <span>{reqItem}</span></MakeOfferModalDescription>
  }else if(typeOffer === 4){
    render = <MakeOfferModalDescription>The offer is <span>{item}</span> for <span>${price}</span></MakeOfferModalDescription>
  }

  return (<Modal isOpen={isOpen} onRequestClose={handleModal} style={customStyles}>
      <MakeOfferModalContainer>
        <MakeOfferModalTitle>¿Are you sure about making an offer to <span>{name}</span>?</MakeOfferModalTitle>
        {render}
        {loading ? <LoadingButton/> : <MakeOfferModalButton onClick={handleSubmit}>Make offer</MakeOfferModalButton>}
      </MakeOfferModalContainer>
    </Modal>
  )
};