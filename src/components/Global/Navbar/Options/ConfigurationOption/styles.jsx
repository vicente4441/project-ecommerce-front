import styled from "styled-components";

export const ConfigurationOptionContainer = styled.div`
  background-color: whitesmoke;
  border: 1px solid lightgray;
  position: absolute;
  top: 100%;
  padding: 10px 0px;
  right: 0px;
  z-index: 2;
  font-size: .9em;

  p{
    padding: 10px 20px;
    white-space: nowrap;
    cursor: pointer;
    
    &:hover{
    background-color: lightgray;
    }
  }

  @media screen and (max-width: 1024px){
    font-size: 0.85em;
  }
`;