import { useEffect } from "react";
import { PublicationOptionContainer } from "./styles";
import { Link } from "react-router-dom";

export const PublicationOption = ({ refOption, handleShow }) => {
  const handleClickDropdown = (e) => {
    if(refOption.current && !refOption.current.contains(e.target)){
      handleShow()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickDropdown)

    return () => {
      document.removeEventListener('click', handleClickDropdown)
    }
  });

  return (
    <PublicationOptionContainer>
      <Link to='/mypublications' onClick={handleShow}><p>My Publications</p></Link>
      <Link to='/likes' onClick={handleShow}><p>My Likes</p></Link>
    </PublicationOptionContainer>
  )
};