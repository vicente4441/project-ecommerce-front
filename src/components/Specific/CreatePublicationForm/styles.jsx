import styled from "styled-components";

export const CreatePublicationFormContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #3483fa;
  transition: .25s background-color;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    background-color: #1E6DFF;
  }
`;