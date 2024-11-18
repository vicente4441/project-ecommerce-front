import styled from "styled-components";

export const SignUpFormContainer = styled.form`
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

export const SignUpTitle = styled.h2`
  text-align: center;
  font-size: 32px;
`;

export const SignUpButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const SignUpButton = styled.button`
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