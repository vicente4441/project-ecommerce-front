import styled from "styled-components";

export const MenuMobileContainer = styled.div`
  position: fixed;
  background-color: whitesmoke;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  max-width: 100vw;
  border-right: 1px solid lightgray;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
  transition: transform 1s;
`;

export const MenuMobileItem = styled.div`
  padding: 15px 0px;
  width: 100%;
`;

export const MobileButtonMenu = styled.button`
  padding: 10px;
  background-color: #3483FA;
  color: white;
  border-radius: 5px;
  font-size: 0.9em;
  cursor: pointer;
  transition: .25s background-color;

  &:hover{
    background-color: #1e6dff; 
  }
`;

export const MobileSearchContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  gap: 10px;
  flex-direction: column;
`;

export const ButtonSwitch = styled.div`
  background-color: whitesmoke;
  position: absolute;
  left: calc(100% - 1px);
  padding: 15px 10px;
  color: #3483FA;
  display: flex;
  top: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 0.65em;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;

  &:hover{
    background-color: lightgray;
  }

  i{
    font-size: 1.5em;
  }
`;

export const MobileMenuList = styled.div`
  margin-top: 20px;
`;

export const MobileCategorie = styled.div`
  padding: 10px;
  border-bottom: 1px solid lightgray;
  width: 100%;
`;

export const MenuMobilePrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const MenuMobileButtonHidden = styled.button`
  background-color: whitesmoke;
  color: #3483FA;
  display: flex;
  top: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 0.85em;
  cursor: pointer;
  padding: 10px 0px;

  i{
    font-size: 1.2em;
  }
`;