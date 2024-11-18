import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 20px 1.5vw;
  border-bottom: 1px solid lightgray;
`;

export const HeaderImageContainer = styled.div`
  width: 300px;
  max-width: 95%;
  @media screen and (max-width: 920px){
    max-width: 280px;
  }
`;

export const HeaderImage = styled.img`
`;

export const HeaderName = styled.h2`
  font-size: 1.5rem;

  @media screen and (max-width: 920px){
    text-align: center;
  }
`;