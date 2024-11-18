import { FooterButton, FooterButtonsContainer, FooterContainer, FooterLeft, FooterRight } from "./styles";
import { LoadingButton } from '../../../Global/LoadingButton/LoadingButton'

export const Footer = ({ own, offer, handleSubmitAccept, handleSubmitDecline, handleShowModal, loading }) => {
  let render;

  if(loading){
    render = <LoadingButton height={120} width={120}/>
  }else if(own && offer.status === 'pending'){
    render = <>
      <FooterButton onClick={() => handleSubmitAccept(offer)}>
        Accept
      </FooterButton>
      <FooterButton onClick={() => handleSubmitDecline(offer)}>
        Decline
      </FooterButton>
    </>
  }
  
  return (<FooterContainer>
    <FooterLeft>
      <p>Receiver: { offer.receiver.name }</p> -
      <p>Transmitter: { offer.transmitter.name }</p>
    </FooterLeft>
    <FooterRight>
      <p>status: {offer.status}</p>
      <FooterButtonsContainer>
        {render}
        <FooterButton onClick={() => handleShowModal(offer.publication, offer.publication.publicationperitem || offer.publicationoffer )}>
          View
        </FooterButton>
      </FooterButtonsContainer>
    </FooterRight>
  </FooterContainer>)
};