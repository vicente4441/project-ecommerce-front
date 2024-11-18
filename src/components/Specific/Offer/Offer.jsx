import { Footer } from "./Footer/Footer"
import { Information } from "./Information/Information"
import { OfferContainer } from "./styles"

export const Offer = ({ own, offer, handleSubmitAccept, handleSubmitDecline, handleShowModal, loading }) => {
  return (<OfferContainer>
    <Information offer={offer} own={own}/>
    <Footer own={own} offer={offer} handleSubmitAccept={handleSubmitAccept} handleSubmitDecline={handleSubmitDecline} handleShowModal={handleShowModal} loading={loading}/>
  </OfferContainer>)
}