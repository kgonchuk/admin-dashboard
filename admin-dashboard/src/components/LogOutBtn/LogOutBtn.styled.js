import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";
import color from "../../global/globalColors";
export const LogOutBtnStyled = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s ease;    
     
  &:hover ,
  &:focus {
    fill: ${color.greenLight};

  }
      
  @media screen and (min-width: ${breakpoints.large}) {
 
   `;