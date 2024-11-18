import { DescriptionContainer, DescriptionImageContainer, DescriptionItem, DescriptionText } from "./styles";

export const Description = ({ name, description, price, quantity, categorie, type }) => {
  return (<DescriptionContainer>
    <DescriptionItem>
      <DescriptionImageContainer>
        <img src='../../../../../download.webp'/>
      </DescriptionImageContainer>
      <DescriptionText>Name: {name}</DescriptionText>
      <DescriptionText>Description: {description}</DescriptionText>
      <DescriptionText>Price: ${price}</DescriptionText>
      <DescriptionText>Quantity: {quantity}</DescriptionText>
      <DescriptionText>Categorie: {categorie}</DescriptionText>
      <DescriptionText>Type: {type ? type : '---'}</DescriptionText>
    </DescriptionItem>
  </DescriptionContainer>)
};