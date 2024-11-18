import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  background-color: whitesmoke;
  border-bottom: 1px solid lightgray;
  display: flex;
  padding: 0px 15px;
  justify-content: space-between;
  height: 70px;
  gap: 3vw;
`;

export const NavbarRight = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const NavbarCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const NavbarLeft = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const NavbarButton = styled.div`
  padding: 10px; 
  transition: color .25s;
  cursor: pointer;

  &:hover{
    color: grey; 
  }
`;

export const NavbarButtonOptions = styled.div`
  padding: 10px 0px;
  color: #3483fa;
  transition: color .25s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  
  &:hover{
    color: #1e6dff;
  }
`;

export const NavbarLogo = styled.div`
  width: 200px;
  height: 100%;

  img{
    width: 100%;
    object-fit: cover;
    object-position: 0px 47%;
  }
`;