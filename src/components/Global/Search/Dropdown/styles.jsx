import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 100%;
  position: absolute;
  top: calc(100% + 5px);
  background-color: whitesmoke;
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1;
`;

export const DropdrownOption = styled.li`
  padding: 14px 10px;
  font-size: 0.9em;
  cursor: pointer;
  transition: .25s background-color;
  border-radius: 5px;
  margin-bottom: 5px;
  &:hover{
    background-color: lightgray;
  }
`;

export const DropdrownOptionDefault = styled.li`
  background-color: #3483fa;
  padding: 14px 10px;
  font-size: 0.9em;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  transition: .25s background-color;

  &:hover{
    background-color: #1e6dff;
  }
`;