import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
`

export const PublicationImageContainer = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;
  
export const PublicationImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
    
export const PublicationTitle = styled.h3`
  font-size: 16px;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid lightgray;
  color: #3483fa;
  transition: color .25s;
`;

export const PublicationAdvice = styled.div`
  position: absolute;
  right: 0px;
  padding: 10px;
  color: #3483fa;
  border: 1px solid lightgray;
  background-color: whitesmoke;
  border-radius: 50%; 
`;