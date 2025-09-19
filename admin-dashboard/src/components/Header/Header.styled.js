import styled from "styled-components"; 
import { breakpoints } from "../../global/breakPoints";


export const HeaderStyled = styled.header`
background-color: #f7f8fa;
display: flex;
align-items: center;
 padding: 17px 20px;
 gap: 20px;
 border-bottom: 1px solid rgba(29, 30, 33, 0.1);
 @media screen and (min-width: ${breakpoints.medium})   {
 padding: 15px 32px;
}
@media screen and (min-width: ${breakpoints.large})   {
gap: 60px;
padding: 15px 20px;
}
 `;

export const HeaderTitle = styled.div`
  `;

 

export const MobileMenuIcon=styled.svg``;
export const LogOutContainer=styled.div`
   display: none;
@media screen and (min-width: ${breakpoints.large})  {
display: block;
 position: absolute;
top: 18px;
right: 40px;

  }
 `;