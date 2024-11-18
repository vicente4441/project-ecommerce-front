import { useState } from "react";
import { OffersContainer, OffersNav, OffersNavLink } from "./styles";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

export const Offers = () => {
  return (
  <>
    <OffersContainer>
      <OffersNav>
        <NavLink to='received' style={({ isActive }) => {return isActive ? { backgroundColor: isActive && '#1E6DFF' } : {}}}>Offers received</NavLink>
        <NavLink to='made' style={({ isActive }) => {return isActive ? { backgroundColor: isActive && '#1E6DFF' } : {}}}>Offers made</NavLink>
      </OffersNav>
      <Outlet/>
    </OffersContainer>
  </>
  )
};