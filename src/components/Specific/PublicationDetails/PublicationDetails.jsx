import { PublicationDetail } from "../../Global/PublicationDetail/PublicationDetail"
import { PublicationDetailsContainer } from "./styles"

export const PublicationDetails = ({ publication, description, setDescription, price, setPrice, quantity, setQuantity, type, categorie, setCategorie, reqDescription, setReqDescription, reqPrice, setReqPrice, reqCategorie, setReqCategorie, reqQuantity, setReqQuantity, edit, listCategories, listTypes }) => {
  return (
    <PublicationDetailsContainer>
      <PublicationDetail name={publication.name} description={description} setDescription={setDescription} categorie={categorie} setCategorie={setCategorie} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} type={type} myItem={true} edit={edit} listTypes={listTypes} listCategories={listCategories}/>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <i class="bi bi-arrow-left-right"></i>
      </div>
      {publication.publicationType.id === 3 && <PublicationDetail name={publication.publicationperitem.name} description={reqDescription} setDescription={setReqDescription} price={reqPrice} setPrice={setReqPrice} categorie={reqCategorie} setCategorie={setReqCategorie} quantity={reqQuantity} setQuantity={setReqQuantity} listCategories={listCategories} edit={edit}/>}
    </PublicationDetailsContainer>
  );
};