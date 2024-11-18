import styled from "styled-components";

export const MiniListFriendsContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #3483fa;
  transition: .25s background-color;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  &:hover{
    background-color: #1e6dff;
  }
`;

export const Text = styled.p`
  font-size: 12px
`;

export const List = styled.div`
  width: 220px;
  height: 320px;
  position: absolute;
  bottom: calc(100% + 20px);
  right: -20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: whitesmoke;
  overflow-y: auto;
`;

export const ListHeader = styled.div`
  background-color: #3483fa;
  width: 100%;
  height: 10%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListUserPending = styled.div`
  padding: 15px 20px;
  display: flex;
  gap: 5px;
  background-color: #F0AD4E;
  border-bottom: 1px solid lightgray;
`;

export const ListUseraAccepted = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid lightgray;
  background-color: #3483fa;
`;

export const ListButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
`;