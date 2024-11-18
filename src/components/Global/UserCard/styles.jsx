import styled from "styled-components";

export const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: whitesmoke;
  cursor: pointer;
  transition: .25s background-color;

  &:hover{
    background-color: lightgray;
  }

  @media screen and (max-width: 720px){
    flex-direction: column;
    gap: 20px;
  }
`;

export const UserCardButton = styled.button`
  background-color: #3483fa;
  font-size: 15px;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color .25s;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover{
    background-color: #1e6dff;
  }
`;

export const UserCardButtonsContainer = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #3483fa;

  @media screen and (max-width: 720px){
    flex-wrap: wrap;
    gap: 20px;
  }
`;