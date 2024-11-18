import Modal from 'react-modal';
import { PublicationDetail } from '../../Global/PublicationDetail/PublicationDetail';
import { PublicationDetailsContainer } from '../PublicationDetails/styles';

Modal.setAppElement('#root');

export const ModalOffer = ({ isOpen, handleModal, publication, publicationOffer }) => {
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
      maxWidth: '95vw',
      maxHeight: '95vh',
    }
  };

  return (
  <Modal isOpen={isOpen} onRequestClose={handleModal} style={customStyles}>
    <PublicationDetailsContainer>
      <PublicationDetail name={publication?.name} description={publication?.description} categorie={publication?.categorie} type={publication?.type} price={publication?.price} quantity={publication?.quantity} myItem={true}/>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <i class="bi bi-arrow-left-right"></i>
      </div>
      {publication?.type?.value === 2 || publication?.type?.value === 3 ? <PublicationDetail name={publicationOffer?.name} description={publicationOffer?.description} categorie={publicationOffer?.categorie} price={publicationOffer?.price} quantity={publicationOffer?.quantity}/> : <></>}
    </PublicationDetailsContainer>
  </Modal>)
}