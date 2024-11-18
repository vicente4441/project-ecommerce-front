import styled from "styled-components";

export const ReviewsSubpageContainer = styled.div`
`;

export const Review = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  gap: 20px;
  margin: 20px 0px;
`;

export const Stars = styled.div`
  display: flex;
  gap: 10px;
  color: #3483fa;
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ReviewHeaderLeft = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
`;

export const ReviewComment = styled.p`
  font-size: 0.9em;
  color: gray;
`;

export const ReviewsEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
`;



