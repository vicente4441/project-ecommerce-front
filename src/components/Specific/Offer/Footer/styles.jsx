import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;  
  width: 100%;
  flex-wrap: wrap;
`;
  
export const FooterButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FooterButton = styled.button`
  padding: 10px;
  background-color: #3483fa;
  transition: .25s background-color;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    background-color: #1E6DFF;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 720px){
    width: 100%;
    flex-direction: column;
    align-items: end;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 720px){
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  }
`;