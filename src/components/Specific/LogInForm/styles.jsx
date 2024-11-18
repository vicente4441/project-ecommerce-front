import styled from "styled-components";

export const LogInFormContainer = styled.form`
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1024px){
    width: 70%;
  }

  @media screen and (max-width: 920px){
    width: 90%;
  }
`;

export const LogInTitle = styled.h2`
  text-align: center;
  font-size: 2em;
`;

export const LogInButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const LogInButton = styled.button`
  background-color: #3483fa;
  transition: background-color .25s;
  border-radius: 5px;
  padding: 12px;
  color: white;
  cursor: pointer;

  &:hover{
    background-color: #1e6dff;
  }
`;