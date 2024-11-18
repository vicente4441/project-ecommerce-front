import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarMobileContainer = styled.div`
`;

export const NavbarMobileTop = styled.div`
  background-color: whitesmoke;
  width: 100%;
`;

export const NavbarMobileTopButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: whitesmoke;
  border-bottom: 1px solid lightgray;
  background-image: linear(45deg, #3483fa 50%, lightgray);
`;

export const NavbarMobileTopButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const NavbarMobileTopSearchContainer = styled.div`
  padding: 10px;
`;

export const NavbarMobileBottom = styled.div`
  position: fixed;
  z-index: 1;
  background-color: whitesmoke;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
  height: 70px;
`;

export const NavbarMobileLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 0.8em;
  cursor: pointer;

  i{
    font-size: 1.5em;
  }
`;

export const NavbarMobileButton = styled.button`
  font-size: 0.9em;
  cursor: pointer;
  padding: 10px 0px;

  i{
    font-size: 1.2em;
  }
`;

export const NavbarMobileLogo = styled.div`
  display: flex;
  align-items: center;
`;