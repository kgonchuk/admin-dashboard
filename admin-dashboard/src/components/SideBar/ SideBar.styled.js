import styled from "styled-components"; 
import { breakpoints } from "../../global/breakPoints";
import color from "../../global/globalColors";



 export const MenuMobileBtn = styled.button`
  position: absolute;
;
  //  left: 0;
  right:20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
padding: 0;
margin: 0;
 

  svg {
    width: 32px;
    height: 32px;
    stroke: #000;
    stroke-width: 2;
  }
    @media screen and (min-width: ${breakpoints.medium})  { 
    left: 32px; }
@media screen and (min-width: ${breakpoints.large})  {
    display: none;
  }

  &.hidden {
    display: none;
  }
`;
export const MenuMobileBurger = styled.button`
  position: absolute;
top:-60px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
padding: 0;
margin: 0;
 

  svg {
    width: 32px;
    height: 32px;
    stroke: #000;
    stroke-width: 2;
  }
    @media screen and (min-width: ${breakpoints.medium})  { 
    left: 32px; }
@media screen and (min-width: ${breakpoints.large})  {
    display: none;
  }

  &.hidden {
    display: none;
  }
`;

export const MobileMenuIcon=styled.svg``;

export const Overlay=styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
   

`;

export const SideBarContainer=styled.div`
   display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f7f8fa;
  height: 100vh;
  width: 84px;
  box-sizing: border-box;
  border-width: 1px 1px 0px 0px;
  border-style: solid;
  border-color: rgba(29, 30, 33, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 2;

  &.no-scroll {
    overflow: hidden;
  }

  &.open {
    transform: translateX(0);
    min-height: 100vh;
  }


 @media screen and (min-width: ${breakpoints.large})  {
    transform: translateX(0);
    padding: 40px 18px;
     position: static;
 display: flex;
width: 80px;
height: auto;
padding-top: 20px;

   
  }
  `;


  export const NavList=styled.ul`
  list-style: none;
  padding-top: 92px;
  display:block;
  @media screen and (min-width: ${breakpoints.large}) {
    padding-top: 0px;
  }`;


        
  export const NavItem=styled.li`
  width: 38px;
  height: 38px;
  border-radius: 50%;
 background-color: ${color.white};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 14px;
    a {
    &.active {
      svg {
        fill: #3F945F;
      }
    }

    
  }
   `;

export const SidebarIcon=styled.svg`
   width: 14px;
   height: 14px;
   fill: ${color.greyLight};
   stroke: ${color.greyLight};
   stroke-width: 2;
   stroke-linecap: round;
   stroke-linejoin: round;
   
   `;    
   export const LogOutContainer=styled.div`
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translateX(-50%);
   display: block;
    @media screen and (min-width: ${breakpoints.large}) {
   display: none;
  }
 `;
 export const SidebarWrapper=styled.div`
 display:flex;
 justify-content: end;

 `;