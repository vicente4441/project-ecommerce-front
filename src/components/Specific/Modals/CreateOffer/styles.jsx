import styled from "styled-components";

export const CreateOfferModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CreateOfferModalButton = styled.button`
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