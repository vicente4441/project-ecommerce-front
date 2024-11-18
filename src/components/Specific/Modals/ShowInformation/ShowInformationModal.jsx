import Modal from 'react-modal';
import { ShowInformationModalText, ShowInformationModalTitle, ShowModalInformationModalContainer } from './styles';
import { format } from 'date-fns';
import { LoadingButton } from '../../../Global/LoadingButton/LoadingButton';

export const ShowInformationModal = ({ isOpen, handleModal, information, loading }) => {
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
    {loading ? <LoadingButton/> :
    <ShowModalInformationModalContainer>
      <ShowInformationModalTitle>Information profile</ShowInformationModalTitle>
      <ShowInformationModalText>Email: {information?.email}</ShowInformationModalText>
      <ShowInformationModalText>Followers: 5</ShowInformationModalText>
      <ShowInformationModalText>Account created in: {information?.createdAt && format(new Date(information?.createdAt), "dd-MM-yyyy")}</ShowInformationModalText>
      <ShowInformationModalText>Country: Argentina</ShowInformationModalText>
    </ShowModalInformationModalContainer>}
  </Modal>)
};