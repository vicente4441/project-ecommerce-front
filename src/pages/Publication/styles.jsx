import styled from "styled-components";

export const PublicationContainer = styled.div`
  padding-bottom: 50px;
`;

export const PublicationOffer = styled.div`
  display: flex;

  @media screen and (max-width: 1050px){
    flex-direction: column;
  }
`;

export const PublicationSubTitle = styled.h2`
  font-size: 1.5em;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  text-align: center;
  color: #3483fa;
`;