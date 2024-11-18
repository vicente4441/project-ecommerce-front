import { Link } from "react-router-dom";
import { UserCardButton, UserCardButtonsContainer, UserCardContainer } from "./styles";

export const UserCard = ({ name, lastName, id, country, city, state, own }) => {
  return (<UserCardContainer>
    <p>{name} {lastName}</p>
    <UserCardButtonsContainer>
      <p style={{marginRight: '10px'}}><i class="bi bi-geo-alt-fill"></i> {country}, {state}, {city}</p>
      {!own && <UserCardButton>Add friend</UserCardButton>}
      <UserCardButton><Link to={`/profile/${id}`}>View profile</Link></UserCardButton>
    </UserCardButtonsContainer>
  </UserCardContainer>)
};