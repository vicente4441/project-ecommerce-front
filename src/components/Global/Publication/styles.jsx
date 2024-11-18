import styled from "styled-components";

export const PublicationContainer = styled.div`
  width: 250px;
  border: 1px solid lightgray;
  border-radius: 10px;
  transition: border-color .25s;
  align-self: start;
  flex-shrink: 0;

  &:hover{
    border-color: gray;
  }
`;