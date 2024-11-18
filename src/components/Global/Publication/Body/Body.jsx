import { BodyContainer, PublicationCategorie, PublicationDescription, PublicationPrice, PublicationPriceQuantityContainer, PublicationQuantity, PublicationTypeContainer } from "./styles";

export const Body = ({ type, categorie, quantity, price, description, reqName, reqItem }) => {
  return (
  <BodyContainer>
      <PublicationDescription>{description}</PublicationDescription>
      {!reqItem && <PublicationTypeContainer>
        <i className="bi bi-arrow-left-right"></i>
        <p>{reqName || type}</p>
      </PublicationTypeContainer>}
      <PublicationCategorie>{categorie}</PublicationCategorie>
      <PublicationPriceQuantityContainer>
        <PublicationQuantity>x {quantity}</PublicationQuantity>
        <PublicationPrice>${!(type === 'Sell') ? '-': price}</PublicationPrice>
      </PublicationPriceQuantityContainer>
  </BodyContainer>
  )
};