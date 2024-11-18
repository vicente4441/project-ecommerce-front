import styled from "styled-components";

export const DisableAccountModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const DisableAccountModalTitle = styled.h2`
  font-size : 1.5em;
  font-weight: bold;
`;

export const DisableAccountModalSubTitle = styled.h3`
  font-size : 1.1em;
  color: #ff3333;
`;

export const DisableAccountButton = styled.button`
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