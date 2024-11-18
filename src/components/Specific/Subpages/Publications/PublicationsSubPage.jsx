import { useEffect, useState } from "react";
import { Publication } from "../../../Global/Publication/Publication";
import { PublicationsButton, PublicationsContainer, PublicationsEmpty, PublicationsSubpageContainer } from "./styles";
import { getSummaryPublications } from "../../../../services/publication";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RenderPublicationsEmpty } from "../../../Global/RenderPublicationsEmpty/RenderPublicationsEmpty";
import { AxiosError } from "axios";
import { LoadingSubpage } from "../../../Global/LoadingSubpage/LoadingSubpage";

export const PublicationsSubPage = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { auth: { user } } = useSelector(state => state);

  const fetchGetPublications = async () => {
    setLoading(true)
    const results = await getSummaryPublications(id);
    if(results && !(results instanceof AxiosError)){
      setPublications(results.data);
    }else{
      console.log(results);
    };

    setLoading(false);
  };

  useEffect(() => {
    fetchGetPublications();
  }, []);

  if(loading) return <LoadingSubpage/>

  return (<PublicationsSubpageContainer>
    <PublicationsButton><Link to={user?.id === parseInt(id) ? '/mypublications' : `/publications/${id}`}>View all publications</Link></PublicationsButton>
    {publications.length > 0 ? <PublicationsContainer>
      {publications?.map((publication) => <Publication key={publication?.id} id={publication?.id} title={publication?.name} description={publication?.description} price={publication?.price} quantity={publication?.quantity} categorie={publication?.categorie?.name} type={publication?.publicationType?.name} user={publication?.user?.name} reqName={publication?.publicationperitem?.name}/>)}
    </PublicationsContainer> : 
    <PublicationsEmpty>No publications</PublicationsEmpty>
    }
  </PublicationsSubpageContainer>)
};