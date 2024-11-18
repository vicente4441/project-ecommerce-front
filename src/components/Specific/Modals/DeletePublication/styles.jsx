import styled from "styled-components";

export const DeletePublicationModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const DeletePublicationModalTitle = styled.h2`
  font-size : 1.5em;
  font-weight: bold;
`;

export const DeletePublicationModalSubTitle = styled.h3`
  font-size : 1.1em;
  color: #ff3333;
`;

export const DeletePublicationModalButton = styled.button`
  padding: 10px;
  color: white;
  background-color: #ff3333;
  transition: .25s background-color;
  border-radius: 10px;
  cursor: pointer;

  &:hover{
    background-color: #993333;
  }
`;