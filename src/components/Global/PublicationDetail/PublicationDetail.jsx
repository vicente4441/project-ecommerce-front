import { Body } from "./Body/Body"
import { Header } from "./Header/Header"
import { PublicationDetailContainer } from "./styles"

export const PublicationDetail = ({ name, setName, description, setDescription, quantity, setQuantity, price, setPrice, type, categorie, setCategorie, myItem, edit, listCategories, listTypes, makeOffer }) => {
return (<PublicationDetailContainer>
    <Header name={name} setName={setName} makeOffer={makeOffer}/>
    <Body description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} type={type} categorie={categorie} setCategorie={setCategorie} myItem={myItem} edit={edit} listTypes={listTypes} listCategories={listCategories} makeOffer={makeOffer}/>
  </PublicationDetailContainer>)
}