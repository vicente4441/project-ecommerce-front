import { List, ListButton, ListHeader, ListUser, ListUseraAccepted, ListUserPending, MiniListFriendsContainer, Text } from "./styles";

export const MiniListFriends = () => {
  return (<MiniListFriendsContainer>
    <List>
      <ListHeader>Followers 
        <i class="bi bi-dash-lg"></i>
      </ListHeader>
      <ListUserPending>
        <Text>Nahuel quiere seguirte</Text>
        <ListButton>
          <i class="bi bi-check2"></i>
        </ListButton>
        <ListButton>
          <i class="bi bi-x"></i>
        </ListButton>
      </ListUserPending>
      <ListUseraAccepted>
        <Text>Ricardo te ha comenza a seguir</Text>
      </ListUseraAccepted>
    </List>
    <i class="bi bi-person-fill"></i>
    <Text>Followers</Text>
  </MiniListFriendsContainer>)
};