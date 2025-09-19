import styled from "styled-components"; 
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";
export  const TittleContainer = styled.div`
  text-align: left;
margin-bottom: 4px 
  ;
`;
export const TittleText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0em;
  color:${color.primaryDark};
@media screen and (min-width: ${breakpoints.medium})  {
    font-size: 24px;
    line-height: 28px;
  }


`;