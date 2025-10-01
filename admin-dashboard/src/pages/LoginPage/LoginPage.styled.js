import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";
import color from "../../global/globalColors";

export const FormContainer = styled.div`
    position: relative;
    padding:24px 20px;

    @media screen and (min-width: ${breakpoints.medium}) {
 padding:24px 32px;
    }
    @media screen and (min-width: ${breakpoints.large}) {
padding :28px 100px;
    }
 `;

export const HeadBlock = styled.div`
 display:flex;
 align-items:center;
 gap:14px;
 @media screen and (min-width: ${breakpoints.medium}) {
gap:4px;
    }
 
 `;
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
width: 335px;
margin-bottom:40px;
@media screen and (min-width: ${breakpoints.medium}) {
width: 614px;
margin-bottom:50px;
    }
@media screen and (min-width: ${breakpoints.large}) {
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
top: 100px;
left: 448px;
width: 179px;
height: 175px;
    };

@media screen and (min-width: ${breakpoints.large}) {
top: 194px;
left: 516px;
width: 179px;
height: 175px;
    }
    `;

export const HeadTitle = styled.h2`
  font-family: 'Inter', sans-serif; 
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0%;
  color: #1D1E21;
  span{
    color: #59b17a;
  }
   @media screen and (min-width: ${breakpoints.medium}) {
    font-size: 54px;
    width: 614px;
    height: 240px;
    left: 32px;
    top: 272px;
    line-height: 60px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    left: 100px;
    top: 298px;
  }
  `;

  export const HeaderFormWrap=styled.div`

  margin-top:148px;
  @media screen and (min-width: ${breakpoints.large}) {
display:flex;
align-items:center;
gap:150px;
margin-top:226px;


  `;
export const HeaderImg=styled.div`
position:absolute;
top:666px;
left:117px;

  @media screen and (min-width: ${breakpoints.medium}) {
top:761px;
left:502px;
        }

@media screen and (min-width: ${breakpoints.large}) {
top:600px;
left:1200px;
  }
`
