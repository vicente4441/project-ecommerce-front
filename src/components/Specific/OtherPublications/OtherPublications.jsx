import { Publication } from "../../Global/Publication/Publication";
import { OtherPublicationsContainer } from "./styles";

export const OtherPublications = ({ publications }) => {
  return (<OtherPublicationsContainer>
    {publications.map((publication) => <Publication key={publication?.id} id={publication?.id} title={publication?.name} description={publication.description} price={publication.price} quantity={publication.quantity} categorie={publication?.categorie?.name} type={publication?.publicationType?.name} user={publication?.user?.name} reqName={publication?.publicationperitem?.name} idUser={publication?.user?.id} offerFinalized={publication.idTransmitterAccepted}/>)}
  </OtherPublicationsContainer>)
};