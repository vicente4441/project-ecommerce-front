import styled from "styled-components";

export const OffersContainer = styled.div`
  min-height: 100vh;
  padding: 20px;

  @media screen and (max-width: 720px){
    padding: 10px;
  }
`;

export const OffersNav = styled.div`
  display: flex;
  gap: 20px;
  padding: 0px 0px 10px 10px;
  border-bottom: 1px solid lightgray;

  a{
    padding: 10px;
    background-color: #3483fa;
    transition: .25s background-color;
    color: white;
    border-radius: 10px;

    &:hover{
      background-color: #1E6DFF;
    }
  }
`;