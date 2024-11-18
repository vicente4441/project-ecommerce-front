import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProfileOptionContainer } from "./styles";

export const ProfileOption = ({ refOption, handleShow, id, handleLogOut }) => {
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
    <ProfileOptionContainer>
      <Link to={`/profile/${id}`} onClick={handleShow}><p>My Profile</p></Link>
      <p onClick={handleLogOut}>Log out</p>
    </ProfileOptionContainer> 
  )
};