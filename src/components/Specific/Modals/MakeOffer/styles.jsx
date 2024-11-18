import styled from "styled-components";

export const MakeOfferModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const MakeOfferModalTitle = styled.h2`
  font-size : 1.3em;
  font-weight: bold;

  span{
    color: #3483fa; 
  }
`;

export const MakeOfferModalDescription = styled.p`
  font-size: .9em;

  span {
    color: #3483fa
  }
`;

export const MakeOfferModalButton = styled.button`
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