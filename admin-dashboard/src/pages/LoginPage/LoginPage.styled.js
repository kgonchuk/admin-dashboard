import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const FormContainer = styled.div`
    position: relative;
 `;

export const HeadBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 14x;
 
  padding: 9px;`;
 export const IconLogin = styled.svg`
  width: 44px;
  height: 44px;
 
  }
`;
export const HeadLogo = styled.h2`
font-family: 'Inter', sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.03em;
color: #1D1E21;
`;
export const HeadTitleBlock = styled.div`
margin-top:160px;
margin-bottom: 50px;
width: 335px;
@media screen and (min-width: ${breakpoints.medium}) {
width: 614px;
    }
`;
export const TableImg=styled.img`
position: absolute;
top: 143px;
left: 220px;
width: 95px;
height: 93px;
@media screen and (min-width: ${breakpoints.medium}) {
top: 153px;
left: 416px;
width: 179px;
height: 175px;
    }`;

export const HeadTitle = styled.h2`
  font-family: 'Inter', sans-serif; 
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0%;
  color: #1D1E21;
  span{
    color: #59b17a;
  }`;