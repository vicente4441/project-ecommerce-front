import styled from "styled-components";

export const PublicationsSubpageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const PublicationsContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  overflow-x: auto;
  padding: 20px 0px;
`;

export const PublicationsButton = styled.button`
  padding: 10px;
  color: white;
  background-color: #3483fa;
  transition: .25s background-color;
  border-radius: 10px;
  cursor: pointer;

  &:hover{
    background-color: #1e6dff;
  }

  @media screen and (max-width: 720px){
    width: 100%;
  }
`;

export const PublicationsEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  width: 100%;
`;