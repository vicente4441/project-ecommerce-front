import { Publication } from "../Publication/Publication";
import { RenderPublicationsContainer } from "./styles";

export const RenderPublications = ({ publications }) => {
  console.log(publications)
  return (<RenderPublicationsContainer>
    {publications?.map((publication) => <Publication key={publication?.id} id={publication?.id} title={publication?.name} description={publication?.description} price={publication?.price} quantity={publication?.quantity} categorie={publication?.categorie?.name} type={publication?.publicationType?.name} user={publication?.user?.name} reqName={publication?.publicationperitem?.name} idUser={publication?.user?.id} like={publication?.like}/>)}
  </RenderPublicationsContainer>)
};