import { Input } from "../../Input/Input"
import { Select } from "../../Select/Select"
import { Textarea } from "../../Textarea/Textarea"
import { BodyContainer, BodyText } from "./styles"

export const Body = ({ description, quantity, price, type, categorie, myItem, edit, setDescription, setPrice, setQuantity, setCategorie, listCategories, listTypes, makeOffer }) => {
  let render = <></>;
  
  if(makeOffer){
    render = <>
      <Textarea rows={5} placeholder='Description' value={description} setValue={setDescription} label={'Enter a description'}/>
      {type?.value === 4 && <Input placeholder='Price' value={price} setValue={setPrice} label={'Enter a price'}/>}
      <Input placeholder='Quantity' value={quantity} setValue={setQuantity} label={'Enter a quantity'}/>
      <Select placeholder='Categorie' value={categorie} listOptions={listCategories} setValue={setCategorie} label={'Enter a categorie'}/>
    </>
  } else if(myItem && edit){
    render = <>
      <Textarea rows={5} placeholder='Description' value={description} setValue={setDescription}/>
      {type?.value === 4 && <Input placeholder='Price' value={price} setValue={setPrice}/>}
      <Input placeholder='Quantity' value={quantity} setValue={setQuantity}/>
      <Select placeholder='Categorie' value={categorie} listOptions={listCategories} setValue={setCategorie}/>
      <Select placeholder='Type' value={type} listOptions={listTypes} disabled={true}/>
    </>
  }else if(edit){
    render = <>
      <Textarea rows={5} placeholder='Description' value={description} setValue={setDescription}/>
      {type?.value === 4 && <Input placeholder='Price' value={price} setValue={setPrice}/>}
      <Input placeholder='Quantity' value={quantity} setValue={setQuantity}/>
      <Select placeholder='Categorie' value={categorie} listOptions={listCategories} setValue={setCategorie}/>
    </>
  }else if(myItem && !edit){
    render = <>
      <BodyText>Description: {description}</BodyText>
      {type?.value === 4 && <BodyText>Price: {price} $</BodyText>}
      <BodyText>Quantity: {quantity}</BodyText>
      <BodyText>Categorie: {categorie?.label}</BodyText>
      <BodyText>Type: {type?.label}</BodyText>
    </>
  }else if(!edit){
    render = <>
      <BodyText>Description: {description}</BodyText>
      {type?.value === 4 && <BodyText>Price: {price} $</BodyText>}
      <BodyText>Quantity: {quantity}</BodyText>
      <BodyText>Categorie: {categorie?.label}</BodyText>
    </>
  }
  
  
  return (<BodyContainer>
    {render}
  </BodyContainer>)
}