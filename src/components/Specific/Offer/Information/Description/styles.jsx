import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  width: 45%;
  padding: 10px;
  padding-top: 0px;
  border-radius: 5px;

  @media screen and (max-width: 720px){
    width: 100%;
    padding: 0px;
  }
`;

export const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;
  padding: 20px;
  padding-top: 0px;
  flex: 1;

  @media screen and (max-width: 720px){
    width: 100%;
    padding: 0px;
  }
`;

export const DescriptionImageContainer = styled.div`
  width: 120px;

  @media screen and (max-width: 720px){
    width: 100%;
  }
`;

export const DescriptionText = styled.p`
  // overflow: hidden;
  // text-overflow: ellipsis;
  // display: -webkit-box;
  // -webkit-line-clamp: 1;
  // line-clamp: 1;
  // -webkit-box-orient: vertical;
  // text-wrap: wrap;
  line-height: 1.2em;
`;