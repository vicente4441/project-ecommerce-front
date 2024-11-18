import styled from "styled-components";

export const BodyContainer = styled.div`
  padding: 20px;
  display: flex; 
  flex-direction: column;
  gap: 20px;
  width: 400px;

  @media screen and (max-width: 920px){
    width: 100%;
  }
`;

export const BodyText = styled.p`
  line-height: 20px;
`;