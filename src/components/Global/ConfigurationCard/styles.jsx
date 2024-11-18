import styled from "styled-components";

export const ConfigurationCardContainer = styled.div`
  padding: 30px 20px;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 10px lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: calc(100%/3 - 20px);

  @media screen and (max-width: 920px){
    width: calc(100%/2 - 20px);    
  }

  @media screen and (max-width: 920px){
    width: 100%;    
  }
`;

export const ConfigurationCardTitle = styled.h2`
  font-size: 1.1em;
  text-align: center;
`;

export const ConfigurationCardButton = styled.button`
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

export const ConfigurationCardButtonDisable = styled.button`
  padding: 10px;
  color: white;
  background-color: #ff3333;
  transition: .25s background-color;
  border-radius: 10px;
  cursor: pointer;

  &:hover{
    background-color: #993333;
  }
`;

export const ConfigurationCardButtonEnable = styled.button`
  padding: 10px;
  color: white;
  background-color: #17B169;
  transition: .25s background-color;
  border-radius: 10px;
  cursor: pointer;

  &:hover{
    background-color: #018749;
  }
`;