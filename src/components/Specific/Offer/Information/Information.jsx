import { Description } from "./Description/Description";
import { InformationContainer, InformationDescription, InformationImageContainer, InformationItem, InformationText } from "./styles"

export const Information = ({ offer }) => {
  const { publication, publication: { publicationperitem }, publicationoffer } = offer;
  return (
    <InformationContainer>
      <Description name={publication?.name} description={publication.description} price={publication.price} quantity={publication.quantity} categorie={publication?.categorie?.name} type={publication.publicationType?.name}/>
      <i className="bi bi-arrow-left-right"></i>
      {publication.publicationType.id === 1 && <p style={{width: '50%', textAlign: 'center'}}>Free</p>}
      {publication.publicationType.id === 2 && <Description name={publicationoffer?.name} description={publicationoffer.description} price={publicationoffer.price} quantity={publicationoffer.quantity} type={publicationoffer?.publicationType?.name} categorie={publicationoffer?.categorie?.name}/>}
      {publication.publicationType.id === 3 && <Description name={publicationperitem?.name} description={publicationperitem.description} price={publicationperitem.price} quantity={publicationperitem.quantity} type={publicationperitem?.publicationType?.name} categorie={publicationperitem?.categorie?.name}/>}
      {publication.publicationType.id === 4 && <p style={{width: '50%', textAlign: 'center'}}>Sell: ${publication.price}</p>}
    </InformationContainer>
  )
};