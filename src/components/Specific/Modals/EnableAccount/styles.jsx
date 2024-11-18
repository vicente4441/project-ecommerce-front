import styled from "styled-components";

export const EnableAccountModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const EnableAccountModalTitle = styled.h2`
  font-size : 1.5em;
  font-weight: bold;
`;

export const EnableAccountModalSubTitle = styled.h3`
  font-size : 1.1em;
  color: #17B169;
`;

export const EnableAccountButton = styled.button`
  padding: 10px;
  color: white;
  background-color: #17B169;
  transition: .25s background-color;
  border-radius: 10px;
  cursor: pointer;

  &:hover{
    background-color: #018749;
  }
`;