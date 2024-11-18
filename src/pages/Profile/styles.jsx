import styled from "styled-components";

export const ProfileContainer = styled.div`

`;

export const ProfileHeader = styled.div`
  padding: 10px;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px lightgray;

  @media screen and (max-width: 720px){
    flex-direction: column;
  }
`;

export const ProfilePhotoContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
    border: 1px solid lightgray;
    border-radius: inherit;
    object-fit: container;
    width: 180px;
    height: 180px;
  }
`;

export const ProfileHeaderConfiguration = styled.div`
  width: 100%;
  padding: 0px 10px 10px;
  display: flex;
  justify-content: end;
  gap: 10px;
  align-self: start;
  border-bottom: 1px solid lightgray;

  @media screen and (max-width: 720px){
    padding: 10px;
  }
`;

export const ProfileHeaderInformation = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;

export const ProfileHeaderInformationContainer= styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 720px){
    flex-direction: column;
    gap: 15px;
  }
`;

export const ProfileHeaderTitle = styled.h1`
  font-size: 1.7em;
`;

export const ProfileHeaderReview = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ProfileButton = styled.button`
  padding: 10px;
  color: white;
  background-color: #3483fa;
  transition: .25s background-color;
  border-radius: 10px;
  cursor: pointer;

  &:hover{
    background-color: #1e6dff;
  }
`;

export const ProfileButtonConfiguration = styled.button`
  color: #3483fa;
  transition: .25s color;
  cursor: pointer;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  transition: 2s transform;

  &:hover{
    color: #1e6dff;
    transform: rotate(1turn);
  }
`;

export const ProfileBody = styled.div`
  min-height: 50vh;
  padding-bottom: 50px;
`;

export const ProfileHeaderStars = styled.div`
  display: flex;
  color: #3483fa;
  gap: 7px;
`;

export const ProfileBodyNav = styled.div`
  display: flex;
  gap: 15px;
  padding: 20px;
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
`;

export const ProfileBodyInformation = styled.div`
  padding: 0px 40px;

  @media screen and (max-width: 720px){
    padding: 0px 20px;
  }
`;