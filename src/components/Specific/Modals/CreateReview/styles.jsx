import styled from "styled-components";

export const CreateReviewModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CreateReviewModalTitle = styled.h2`
  font-size : 1.5em;
  font-weight: bold;
`;

export const CreateReviewModalSubtitle = styled.h3`
  font-size : 1.1em;
`;

export const Stars = styled.div`
  display: flex;
  color: #3483fa;
  gap: 7px;
`;

export const CreateReviewModalButton = styled.button`
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