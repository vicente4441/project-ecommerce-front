import styled from "styled-components";

export const OffersSubpagesContainer = styled.div`
  padding: 20px;
  @media screen and (max-width: 720px){
    padding: 5px;
  }
`;

export const OffersSubpagesNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  padding-top: 5px;

  a{
    color: #3483fa;
    border-bottom: 3px solid #3483fa;
    padding: 10px;
    transition: .25s border-color, .25s color;

    &:hover{
      color: #1E6DFF;
      border-color: #1E6DFF;
    }
  }

  @media screen and (max-width: 720px){
    padding: 10px;
  }

`;

export const OffersEmpty = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
`;

export const OfferFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  padding: 0px 0px 10px;

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

export const OfferFilterButton = styled.button`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  color: #3483fa;
  cursor: pointer;
  transition: .25s color;

  &:hover{
    color: #1e6dff;
  }

  @media screen and (max-width: 720px){
    padding: 10px 0px;
    padding-right: 10px;
  }
`;

export const OfferButtonsFilter = styled.div`
  display: flex;
`;
