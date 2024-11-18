import { useEffect, useState } from "react";
import { getSummaryLikedPublications } from "../../../../services/publication";
import { LikesEmpty, LikesSubpageContainer, PublicationsContainer } from "./style";
import { Publication } from "../../../Global/Publication/Publication";
import { RenderPublications, RenderPublicationsEmpty } from '../../../Global/RenderPublicationsEmpty/RenderPublicationsEmpty'
import { LoadingSubpage } from "../../../Global/LoadingSubpage/LoadingSubpage";
import { AxiosError } from "axios";

export const LikesSubpage = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGetPublications = async () => {
    setLoading(true);
    const results = await getSummaryLikedPublications();

    if(results && !(results instanceof AxiosError)){
      setPublications(results.data);
    }else{
      console.log(results);
    };

    setLoading(false)
  };

  useEffect(() => {
    fetchGetPublications();
  }, []);

  if(loading) return <LoadingSubpage/>

  return(<LikesSubpageContainer>
    {publications.length > 0 ? <PublicationsContainer>
      {publications?.map((publication) => <Publication key={publication?.id} id={publication?.id} title={publication?.name} description={publication?.description} price={publication?.price} quantity={publication?.quantity} categorie={publication?.categorie?.name} type={publication?.publicationType?.name} user={publication?.user?.name} reqName={publication?.publicationperitem?.name}/>)}
    </PublicationsContainer> :
    <LikesEmpty>No results</LikesEmpty>}
  </LikesSubpageContainer>)
};