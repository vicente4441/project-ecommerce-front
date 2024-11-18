import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const InputText = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 0.85em;

  @media screen and (max-width: 920px){
    font-size: 0.8em;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
  display: inline-block;

  @media screen and (max-width: 920px){
    font-size: 0.9em;
  }
`;

export const Error = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  color: #f02c2c;
  font-size: 13px;
`;