import { Link } from "react-router-dom";
import { FooterContainer, PublicationButton, PublicationUser } from "./styles";

export const Footer = ({ user, reqItem, handleView, idUser }) => {
  return (
  <FooterContainer>
    {reqItem ? 
      <></>
      :
      <>
        <PublicationUser><Link to={`/profile/${idUser}`}>{user}</Link></PublicationUser>
        <PublicationButton onClick={handleView}>View</PublicationButton>
      </>
    }
  </FooterContainer>
  )
};