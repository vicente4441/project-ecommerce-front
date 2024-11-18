import styled from "styled-components";

export const OfferContainer = styled.div`
  border: 1px solid lightgray;
  background-color: whitesmoke;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
  transition: .25s background-color;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: lightgray;
  }
`;