import styled from "styled-components";

export const TextareaContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const TextareaStyled = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 0.85rem;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  display: inline-block;
`;

export const Error = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  color: #f02c2c;
  font-size: 13px;
`;