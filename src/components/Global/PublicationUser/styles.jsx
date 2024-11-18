import styled from "styled-components";

export const PublicationUserContainer = styled.div`
  align-self: start;
  margin-top: 50px;
  width: 30%;
  display: flex; 
  flex-direction: column;
  padding-right: 1vw;

  @media screen and (max-width: 1050px){
    width: 100%;
    padding: 20px;
    margin-top: 0px;
  }
`;

export const PublicationUserImageContainer = styled.div`
  width: 150px;
`;

export const PublicationUserImage = styled.img`
`;

export const PublicationUserName = styled.p`
  background-color: lightgray;
  padding: 15px;

  span {
    color: #3483fa
  }
`;

export const PublicationUserButton = styled.button`
  margin-top: 10px;
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

  @media screen and (max-width: 920px){
    width: 100%;
  }
`;

export const PublicationStarsMadeContainer = styled.div`
  padding: 15px 0px;
`;

export const PublicationMade = styled.p`
 margin-top: 20px;
 display: flex;
 justify-content: space-between;
`;

export const PublicationStarsContainer = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
  
export const PublicationStars = styled.div`
  display: flex;
  color: #3483fa;
  gap: 10px;
`;

export const PublicationButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
`;

export const PublicationButtonLike = styled.button`
  padding-top: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3483fa;
  cursor: pointer;
  font-size: 1.2em;  
`;

export const PublicationAdvice = styled.p`
  background-color: #3483fa;
  padding: 10px;
  color: white;
  text-align: end;
`;
