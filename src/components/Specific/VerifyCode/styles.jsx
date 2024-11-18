import styled from "styled-components";

export const VerifyCodeContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const VerifyCodeTitle = styled.h2`
  text-align: center;
  font-size: 32px;
`;

export const VerifyCodeButton = styled.button`
  align-self: center;
  background-color: #3483fa;
  transition: background-color .25s;
  border-radius: 5px;
  padding: 12px;
  color: white;
  cursor: pointer;

  &:hover{
    background-color: #1e6dff;
  }
`;