import zIndex from "@mui/material/styles/zIndex";
import { LoadingButton } from "../../../Global/LoadingButton/LoadingButton";
import { PublicationDetail } from "../../../Global/PublicationDetail/PublicationDetail";
import { CreateOfferModalButton, CreateOfferModalContainer } from "./styles"
import Modal from 'react-modal';

export const CreateOfferModal = ({ isOpen, handleModal, handleSubmit, name, setName, description, setDescription, categorie, setCategorie, price, setPrice, quantity, setQuantity, listTypes, listCategories, loading}) => {
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
      maxHeight: '95vh',
      overflowY: 'auto',
      maxWidth: '95vw'
    }
  };

  return (<Modal isOpen={isOpen} onRequestClose={handleModal} style={customStyles}>
    <CreateOfferModalContainer>
      <PublicationDetail name={name} setName={setName} description={description} setDescription={setDescription} categorie={categorie} setCategorie={setCategorie} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} listTypes={listTypes} listCategories={listCategories} makeOffer={true}/>
      {loading ? <LoadingButton/> : <CreateOfferModalButton onClick={handleSubmit}>Make offer</CreateOfferModalButton>}
    </CreateOfferModalContainer>
  </Modal>)
}