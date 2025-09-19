import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";
export const SubTitleContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 8px;
 
`;
export const SubTitltLink = styled.a`
 font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0em;
  text-decoration: none;
  color: ${color.blackLight};
 

`;
export const SubTitleText = styled.h2`
  ffont-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0em;
  color:${color.blackLight}  `;

  export const SubTitleSpan = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0em;
  color:${color.blackLight}`;