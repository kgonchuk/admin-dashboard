import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";
import color from "../../global/globalColors";

export const ModalOverlay=styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(29, 30, 33, 0.3);
  z-index: 1200;

`;
export const ModalContent=styled.div`
 position: relative;
  width: 335px;
  height: 542px;
  border-radius: 12px;
  background: #fff;
  padding: 40px 20px;
    @media screen and (min-width: ${breakpoints.medium})  {
width: 536px;
  height: 392px;
    padding: 40px 40px;
  }
  @media screen and (min-width: ${breakpoints.large})  {
  width: 536px;
  height: 392px;
   padding: 40px;
  }
`;
export const ModalTitle=styled.h2``;
export const CloseBtn=styled.button`
 position: absolute;
border:none;
  top: 14px;
  right: 14px;
  background: transparent;
  
`;
export const IconClose=styled.svg`

 width:12px;
 height:12px;
 stroke:rgba(29, 30, 33, 1);
 fill: rgba(29, 30, 33, 1);
 @media screen and (min-width: ${breakpoints.large})  {
 width:28px;
 height:28px;
  }
`;
export const Input=styled.input`
font-weight:400;
font-size:12px;
padding:13px 18px;
color:${color.backGroundSecond};
border-radius:60px;
border:none;
border: 1px solid rgba(29, 30, 33, 0.1);
width:100%;
   @media screen and (min-width: ${breakpoints.medium})  {
width:224px;
  }


 @media screen and (min-width: ${breakpoints.large})  {
 
  }
`;
export const InputBlock=styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 20px;
   @media screen and (min-width: ${breakpoints.medium})  {
  flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 0;
  }
`;