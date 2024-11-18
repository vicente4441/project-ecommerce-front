import styled from "styled-components";

export const ProfileOptionContainer = styled.div`
  background-color: whitesmoke;
  border: 1px solid lightgray;
  position: absolute;
  top: 100%;
  padding: 10px 0px;
  right: 0px;
  z-index: 2;
  p{
    padding: 10px 20px;
    white-space: nowrap;
    cursor: pointer;
    font-size: .9em;
    
    &:hover{
    background-color: lightgray;
    }
  }
`;