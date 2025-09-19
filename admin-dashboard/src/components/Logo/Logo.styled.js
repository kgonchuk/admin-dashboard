import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const LogoContainer = styled.div`
  
padding-left: 52px;
  @media screen and (min-width: ${breakpoints.large})   {
padding-left: 0px;
  }
`;
  

export const LogoImg = styled.img`
  width: 32px;
  height: 32px;

`;