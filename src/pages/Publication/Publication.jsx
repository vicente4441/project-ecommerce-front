import { useNavigate, useParams } from "react-router-dom";
import { PublicationDetails } from "../../components/Specific/PublicationDetails/PublicationDetails.jsx";
import { PublicationContainer, PublicationOffer, PublicationSubTitle } from "./styles";
import { useEffect, useState } from "react";
import { deletePublication, getPublication, getPublicationsByCategorieAndType, updatePublication } from "../../services/publication";
import { PublicationUser } from "../../components/Global/PublicationUser/PublicationUser.jsx";
import { getCategories } from "../../services/categories.js";
import { getTypes } from "../../services/types.js";
import { createOffer } from "../../services/offers.js";
import { createLike, deleteLike } from "../../services/likes.js";
import { AxiosError } from "axios";
import { OtherPublications } from "../../components/Specific/OtherPublications/OtherPublications.jsx";
import { MakeOfferModal } from "../../components/Specific/Modals/MakeOffer/MakeOfferModal.jsx";
import { showPopupAdvice } from "../../redux/slices/popup.js";
import { useDispatch } from "react-redux";
import { CreateOfferModal } from "../../components/Specific/Modals/CreateOffer/CreateOfferModal.jsx";
import { DeletePublicationModal } from "../../components/Specific/Modals/DeletePublication/DeletePublicationModal.jsx";
import { Loading } from '../../components/Global/Loading/Loading';

export const Publication = () => {
  const [publication, setPublication] = useState(null);
  const [listCategories, setListCategories] = useState([]);
  const [listTypes, setListTypes] = useState([]);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [categorie, setCategorie] = useState({});
  const [type, setType] = useState({});
  const [reqName, setReqName] = useState('');
  const [reqPrice, setReqPrice] = useState('');
  const [reqCategorie, setReqCategorie] = useState({});
  const [reqDescription, setReqDescription] = useState('');
  const [reqQuantity, setReqQuantity] = useState('');
  const [edit, setEdit] = useState(false);
  const [publicationsByCategorieAndType, setPublicationsByCategorieAndType] = useState([]);
  const [transactionsRealized, setTransactionsRealized] = useState(0);
  const [showMakeOffer, setShowMakeOffer] = useState(false);
  const [showCreateOffer, setShowCreateOffer] = useState(false);
  const [showDeletePublication, setShowDeletePublication] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingOffer, setLoadingOffer] = useState(false);
  const [loadingLike, setLoadingLike] = useState(false);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [idLike, setIdLike] = useState(null)
  const [stars, setStars] = useState(0);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchGetPublication = async () => {
    setLoading(true);
    const results = await getPublication(params.id);

    if(results && !(results instanceof AxiosError)){
      const objCategorie = {
        value: results.data.categorie.id,
        label: results.data.categorie.name
      };
  
      const objType = {
        value: results.data.publicationType.id,
        label: results.data.publicationType.name
      };
  
      const objReqCategorie = {
        value: results.data?.publicationperitem?.categorie?.id,
        label: results.data?.publicationperitem?.categorie?.name
      };

      let count = 0;

      results?.data?.user?.reviewReceiver.forEach(review => {
        count += review.score;
      });
      
      const average = count / results?.data?.user?.reviewReceiver?.length;

      const transactions = results?.data?.user?._count?.publication + results?.data?.user?._count?.publicationTransmitterAccepted

      setTransactionsRealized(transactions);
      setStars(average);
      setDescription(results.data.description);
      setQuantity(results.data.quantity);
      setPrice(results.data.price);
      setCategorie(objCategorie);
      setType(objType);
  
      setReqQuantity(results.data?.publicationperitem?.quantity);
      setReqPrice(results.data?.publicationperitem?.price);
      setReqCategorie(objReqCategorie);
      setReqDescription(results.data?.publicationperitem?.description);
      setPublication(results.data);

      if(results?.data?.like?.length > 0){
        setIdLike(results?.data?.like[0]?.id)
        const like = results.data.like.length > 0;
        setLiked(like);
      };    
        
      fetchGetPublicationsByCategorieAndType(results.data.id, objCategorie.value, objType.value);
      setLoading(false);
    }
  };

  const fetchGetCategories = async () => {
    const results = await getCategories();

    const newResults = [];
    results.data.forEach(result => {
      let obj = {
        value: result.id,
        label: result.name
      }
      newResults.push(obj);
    });

    setListCategories(newResults);
  };
  
  const fetchGetTypes = async () => {
    const results = await getTypes();

    const newResults = [];
    results.data.forEach(result => {
      let obj = {
        value: result.id,
        label: result.name
      }
      newResults.push(obj);
    });

    setListTypes(newResults);
  };

  const fetchGetPublicationsByCategorieAndType = async (id, idCategorie, idType) => {
    const obj = {
      id,
      idCategorie,
      idType
    };

    const results = await getPublicationsByCategorieAndType(obj);

    setPublicationsByCategorieAndType(results.data);
  };

  const handleEdit = () => setEdit(!edit);  

  const handleSubmitUpdate = async () => {
    setLoadingUpdate(true);
    const obj = {
      id: publication.id,
      name: publication.name,
      description,
      quantity: parseInt(quantity),
      price: parseInt(price),
      idCategorie: categorie.value,
      idType: type.value,
      reqId: publication?.publicationperitem?.id,
      reqName: publication?.publicationperitem?.name,
      reqQuantity: parseInt(reqQuantity),
      reqPrice: parseInt(reqPrice), 
      reqDescription,
      reqIdCategorie: reqCategorie.value  
    }

    const results = await updatePublication(obj);

    if(results && !(results instanceof AxiosError)){
      handleEdit();
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }))
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }))
    }

    setLoadingUpdate(false);
  };

  const handleSubmitDelete = async () => {
    setLoadingDelete(true)
    const obj = {
      id: publication.id,
      reqId: publication?.publicationperitem?.id,
      idType: publication.publicationType.id
    };
    
    const results = await deletePublication(obj);

    if(results && !(results instanceof AxiosError)){
      handleShowDeletePublication();
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }));
      navigate('/');
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }))
    }

    setLoadingDelete(false);
  };

  const handleSubmitOffers = async () => {
    setLoadingOffer(true);
    const obj = {
      idReceiver: publication.user.id,
      id: publication.id,
      reqName: reqName || publication?.publicationperitem?.name,
      reqQuantity: parseInt(reqQuantity),
      reqPrice: parseInt(reqPrice), 
      reqDescription,
      reqIdCategorie: reqCategorie.value
    }

    const results = await createOffer(obj);

    if(results && !(results instanceof AxiosError)){
      if(type.value === 2){
        handleShowCreateOffer();
      }else if (type.value === 1 || type.value === 3){
        handleShowMakeOffer();
      }

      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }))
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }))
    }

    setLoadingOffer(false);
  };

  const handleSubmitLike = async () => {
    setLoadingLike(true);
    const results = await createLike(params.id);

    if(results && !(results instanceof AxiosError)){
      setLiked(true);
      setIdLike(results.data)
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }))
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }))
    }
    setLoadingLike(false);
  };

  const handleDeleteLike = async () => {
    setLoadingLike(true);
    const results = await deleteLike(idLike);

    if(results && !(results instanceof AxiosError)){
      setLiked(false);
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }))
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }))
    }
    setLoadingLike(false)
  };

  const handleShowMakeOffer = async () => setShowMakeOffer(!showMakeOffer);

  const handleShowCreateOffer = async () => setShowCreateOffer(!showCreateOffer);

  const handleShowDeletePublication = async () => setShowDeletePublication(!showDeletePublication);

  useEffect(() => {
    fetchGetTypes();
    fetchGetCategories();
    fetchGetPublication();
  }, [params.id]);

  if(loading) return <Loading/>

  return (
  <>
  <DeletePublicationModal isOpen={showDeletePublication} handleModal={handleShowDeletePublication} handleSubmit={handleSubmitDelete} loading={loadingDelete}/>
  <CreateOfferModal isOpen={showCreateOffer} handleModal={handleShowCreateOffer} handleSubmit={handleSubmitOffers} quantity={reqQuantity} setQuantity={setReqQuantity} listCategories={listCategories} listTypes={listTypes} name={reqName} setName={setReqName} categorie={reqCategorie} setCategorie={setReqCategorie} description={reqDescription} setDescription={setReqDescription} price={reqPrice} setPrice={setReqPrice} loading={loadingOffer}/>
  <MakeOfferModal isOpen={showMakeOffer} name={publication?.user?.name} handleModal={handleShowMakeOffer} handleSubmit={handleSubmitOffers} typeOffer={type?.value} item={publication?.name} reqItem={publication?.publicationperitem?.name} price={publication?.price} loading={loadingOffer}/>
  <PublicationContainer>
    {publication && <PublicationOffer>
      <PublicationDetails publication={publication} description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} categorie={categorie} setCategorie={setCategorie} type={type} reqQuantity={reqQuantity} setReqQuantity={setReqQuantity} edit={edit} listCategories={listCategories} listTypes={listTypes} reqName={reqName} setReqName={setReqName} reqCategorie={reqCategorie} setReqCategorie={setReqCategorie} reqDescription={reqDescription} setReqDescription={setReqDescription} reqPrice={reqPrice} setReqPrice={setReqPrice}/>
      <PublicationUser name={publication?.user?.name} lastName={publication?.user?.lastName} createdAt={publication.createdAt} id={publication?.user?.id} edit={edit} liked={liked} stars={stars} transactions={transactionsRealized} type={type} handleEdit={handleEdit} handleSubmitUpdate={handleSubmitUpdate} handleShowDeletePublication={handleShowDeletePublication} handleShowMakeOffer={handleShowMakeOffer} handleSubmitLike={handleSubmitLike} handleDeleteLike={handleDeleteLike} handleShowCreateOffer={handleShowCreateOffer} offerFinalized={publication?.idTransmitterAccepted} loadingUpdate={loadingUpdate} loadingLike={loadingLike}/>
    </PublicationOffer>
    }
    <PublicationSubTitle>Similar products</PublicationSubTitle>
    <OtherPublications publications={publicationsByCategorieAndType}/>
  </PublicationContainer>
  </>
  )
};