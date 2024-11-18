import styled from "styled-components";

export const PopupModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  animation: popup 3s;
  top: 0px;
  opacity: 0;
  z-index: 1000;

  @keyframes popup {
    0% {
      opacity: 0;
      transform: translate(0px, 0px);
    }
    5% {
      opacity: 1;
      transform: translate(0px, 50px);
    }
    95% {
      opacity: 1;
      transform: translate(0px, 50px);
    }
    100%{
      opacity: 1;
      transform: translate(0px, -100px);
    }
  }
`;
  
export const PopupModalMessageSuccess = styled.div`
  padding: 20px;
  background-color: #3483fa;
  color: whitesmoke;
  border-radius: 5px;
  border: 1px solid #1e6dff;
  box-shadow: 0px 0px 10px lightgray;
  box-shadow: 0px 0px 5px #3483fa;
`;

export const PopupModalMessageError = styled.div`
  padding: 20px;
  background-color: #ff3333;
  color: whitesmoke;
  border-radius: 5px;
  border: 1px solid #FF1133;
  box-shadow: 0px 0px 5px #ff3333;
`;