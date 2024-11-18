import styled from "styled-components";

export const UsersContainer = styled.div`
  height: 100vh;
  padding: 20px;
`;

export const UsersTitle = styled.h1`
  font-size: 1.7em;
  border-bottom: 1px solid lightgray;
  padding: 0px 0px 20px;
  span{
    color: #3483fa;
  }
`;

export const UsersList = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 0px 0px;
`;

export const UserButtonsFilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  padding: 10px 0px;

  @media screen and (max-width: 720px){
    flex-direction: column;
    align-items: start;
    padding-bottom: 20px;
    div{
      display: flex;
      width: 100%;
      justify-content: end;
    }
  }
`;

export const UserButtonFilter = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  color: #3483fa;
  cursor: pointer;
  transition: .25s color;

  &:hover{
    color: #1e6dff;
  }

  @media screen and (max-width: 720px){
    padding: 10px 10px 10px 0px;
  }
`;

export const UserButtonsFilter = styled.div`
  display: flex;
`;