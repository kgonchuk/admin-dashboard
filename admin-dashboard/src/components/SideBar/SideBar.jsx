import React, {  useState } from "react";
import { NavLink,} from "react-router-dom";
import { LogOutContainer, MenuMobileBtn, MenuMobileBurger, MobileMenuIcon, NavItem, NavList, Overlay, SideBarContainer, SidebarIcon } from "./ SideBar.styled";
import sprite from "../../assets/sprite-2.svg";
import { LogOutBtn } from "../LogOutBtn/LogOutBtn";


export const SideBar = () => {
 const [isOpen, setIsOpen] = useState(false);
 
  const toggle = () => {
    setIsOpen(!isOpen);
  };



  
  return (
  <> 
  {
    isOpen && <Overlay onClick={toggle} />}
  {!isOpen &&  <MenuMobileBurger onClick={toggle} aria-label="Menu">
        <MobileMenuIcon>
        <use  href={`${sprite}#icon-mobile-menu`}  />
        </MobileMenuIcon>
        </MenuMobileBurger>}
 <SideBarContainer className={isOpen ? "open" : ""}>
    {isOpen &&  <MenuMobileBtn onClick={toggle} aria-label="Menu" >
        <MobileMenuIcon>
        <use  href={`${sprite}#icon-cross`}  />
        </MobileMenuIcon>
        </MenuMobileBtn>}
 
 <NavList>
  <NavItem >
    <NavLink  to="/dashboard"  className={({ isActive }) => (isActive ? "active" : "")}>
  <SidebarIcon width={14} height={14} >
          <use href={`${sprite}#icon-dashboard`}></use>
        </SidebarIcon>
        </NavLink>
    </NavItem>
  <NavItem>
<NavLink to="/orders"  className={({ isActive }) => (isActive ? "active" : "")}>
   <SidebarIcon width={14} height={14} >
          <use href={`${sprite}#icon-orders`}></use>
 </SidebarIcon>
    </NavLink>
        </NavItem>

<NavItem>
<NavLink to="/products"  className={({ isActive }) => (isActive ? "active" : "")}>
<SidebarIcon width={14} height={14} >
          <use href={`${sprite}#icon-products`}></use>
</SidebarIcon>
        </NavLink>
        </NavItem>
 <NavItem>
    <NavLink  to="/suppliers"  className={({ isActive }) => (isActive ? "active" : "")}>
    <SidebarIcon width={14} height={14} >
          <use href={`${sprite}#icon-suppliers`}></use>
    </SidebarIcon>
        </NavLink>
        </NavItem>

  <NavItem  className={({ isActive }) => (isActive ? "active" : "")}>
     <NavLink  to="/customers"  className={({ isActive }) => (isActive ? "active" : "")}>
    <SidebarIcon width={14} height={14} >
          <use href={`${sprite}#icon-customers`}></use>
    </SidebarIcon>
        </NavLink>
        </NavItem>
  </NavList>

  <LogOutContainer>
 <LogOutBtn/>
  </LogOutContainer>
  
  </SideBarContainer>

  
  </>


  )
}       ;