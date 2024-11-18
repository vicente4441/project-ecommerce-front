import styled from "styled-components";

export const CreateContainer = styled.div`
  padding: 20px;
  padding-bottom: 50px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionCreateContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media screen and (max-width: 720px){
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const DescriptionPublication = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  i{
    color: #3483fa;
  }

  @media screen and (max-width: 950px){
    max-width: 100%;
    flex-direction: column;
  }
`;

export const DescriptionPublicationTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

export const CreatePublication = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #3483fa;
  transition: .25s background-color;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover{
    background-color: #1E6DFF;
  }
`;