import { useEffect, useState } from "react";
import { acceptOffer, declineOffer, getOffers } from "../../../../services/offers";
import { ModalOffer } from "../../ModalOffers/ModalOffer";
import { Offer } from "../../Offer/Offer";
import { useDispatch, useSelector } from "react-redux";
import { OfferButtonsFilter, OfferFilter, OfferFilterButton, OffersEmpty, OffersSubpagesContainer, OffersSubpagesNav } from "./styles";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { AxiosError } from "axios";
import { LoadingSubpage } from "../../../Global/LoadingSubpage/LoadingSubpage";
import { showPopupAdvice } from "../../../../redux/slices/popup";

export const OffersSubpage = ({ action }) => {
  const [offers, setOffers] = useState([]);
  const [publication, setPublication] = useState(null);
  const [publicationOffer, setPublicationOffer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const { auth: { user } } = useSelector(state => state)
  const { status } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const created = searchParams.get('created') || 'desc';

  const fetchGetOffers = async () => {
    setLoading(true);

    const results = await getOffers(action, status || 'pending', created);
    
    if(results && !(results instanceof AxiosError)){
      setOffers(results.data);
    }else{
      console.log(results);
    };

    setLoading(false);
  };

  const handleShowModal = (publication, publicationOffer) => {
    const objCategorie = {
      value: publication?.categorie?.id,
      label: publication?.categorie?.name
    };

    const objType = {
      value: publication?.publicationType?.id,
      label: publication?.publicationType?.name
    };

    const objReqCategorie = {
      value: publicationOffer?.categorie?.id,
      label: publicationOffer?.categorie?.name
    };

    
    setPublication({...publication, categorie: objCategorie, type: objType});
    setPublicationOffer({...publicationOffer, categorie: objReqCategorie});
    handleModal();
  };

  const handleSubmitAccept = async (offer) => {
    setLoadingSubmit(true)
    const obj = {
      idPublication: offer.publication.id,
      idTransmitter: offer.transmitter.id,
      idOffer: offer.id
    }

    const results = await acceptOffer(obj);

    if(results && !(results instanceof AxiosError)){
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }));
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }));
    };

    setLoadingSubmit(false);
  };

  const handleSubmitDecline = async (offer) => {
    setLoadingSubmit(true);

    const obj = {
      idOffer: offer.id
    };

    const results = await declineOffer(obj);

    if(results && !(results instanceof AxiosError)){
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }));
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }));
    };

    setLoadingSubmit(false);
  };

  const handleModal = () => setIsModalOpen(!isModalOpen);

  const handleFilter = (e) => {
    setSearchParams({created: e.target.value});
  };

  useEffect(() => {
    fetchGetOffers();
  }, [action, status, created]);

  if(loading) return <LoadingSubpage/>

  return (
  <OffersSubpagesContainer>
      <ModalOffer isOpen={isModalOpen} handleModal={handleModal} publication={publication} publicationOffer={publicationOffer}/>
      <OffersSubpagesNav>
        <NavLink to='pending' style={({ isActive }) => {return isActive ? { color: '#1E6DFF', borderColor: '#1E6DFF' } : {}}}>Pending</NavLink>
        <NavLink to='accepted' style={({ isActive }) => {return isActive ? { color: '#1E6DFF', borderColor: '#1E6DFF' } : {}}}>Accepted</NavLink>
        <NavLink to='declined' style={({ isActive }) => {return isActive ? { color: '#1E6DFF', borderColor: '#1E6DFF' } : {}}}>Declined</NavLink>
      </OffersSubpagesNav>
      <OfferFilter>
        <OfferButtonsFilter>
          <OfferFilterButton onClick={handleFilter} value='desc'><i class="bi bi-arrow-up"></i> Mas reciente</OfferFilterButton>
          <OfferFilterButton onClick={handleFilter} value='asc'><i class="bi bi-arrow-down"></i> Mas viejo</OfferFilterButton>
        </OfferButtonsFilter>
        <p>Filtrado por: {created === 'desc' ? 'Mas reciente' : created === 'asc' ? 'Mas viejo' : ''}</p>
      </OfferFilter>
      {offers.length > 0 ? 
        offers?.map((offer) => <Offer offer={offer} own={offer.receiver.id === user?.id} handleSubmitAccept={handleSubmitAccept} handleSubmitDecline={handleSubmitDecline} handleShowModal={handleShowModal} loading={loadingSubmit}/>)
        :
      <OffersEmpty>
        <p>No results</p>
      </OffersEmpty>}
  </OffersSubpagesContainer>)
};