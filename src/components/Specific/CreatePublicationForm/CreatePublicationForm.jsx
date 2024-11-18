import { Input } from "../../Global/Input/Input";
import { Select } from "../../Global/Select/Select";
import { Textarea } from "../../Global/Textarea/Textarea";
import { Button, CreatePublicationFormContainer } from "./styles";

export const CreatePublicationForm = ({ name, setName, price, setPrice, quantity, setQuantity, categorie, setCategorie, type, setType, description, setDescription, listCategories, listTypes, isMainForm }) => {
  return (
  <CreatePublicationFormContainer>
    <Input type='text' label='Enter a name' placeholder='Name' value={name} setValue={setName}/>
    {type?.value === 4 && <Input type='number' label='Enter a price' placeholder='Price' value={price} setValue={setPrice}/>}
    <Input type='number' label='Enter a quantity' placeholder='Quantity' value={quantity} setValue={setQuantity}/>
    <Select label='Select a categorie' placeholder='Categorie' value={categorie} setValue={setCategorie} listOptions={listCategories}/>
    <Textarea label='Enter a description' placeholder='Description' value={description} setValue={setDescription} rows={5}/>
    {isMainForm && <Select label='Select a type' placeholder='Type' value={type} setValue={setType} listOptions={listTypes}/>}
  </CreatePublicationFormContainer>)
};