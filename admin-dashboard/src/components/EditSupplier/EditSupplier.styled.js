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

export const InputBlock=styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 20px;
@media screen and (min-width: ${breakpoints.medium})  {
flex-direction: row;
flex-wrap: wrap;
gap: 8px;
  }
`;
export const SelectWrap = styled.div`
  position: relative;
  width: 100%;
  @media screen and (min-width: ${breakpoints.medium})  {
width:224px;
  }
`;

export const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 18px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  cursor: pointer;
  font-size: 12px;
 color:${color.backGroundSecond};);
  background-color: #fff;
`;
export const SelectIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: #555;
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.$open ? "180deg" : "0deg")});
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background-color: #34a853; /* зелений фон */
  border-radius: 12px;
  list-style: none;
  margin: 6px 0 0;
  padding: 10px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-height: 180px;
  overflow-y: auto;
  z-index: 5;
  animation: dropdownFade 0.25s ease;

  @keyframes dropdownFade {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export const SelectItem = styled.li`
  padding: 10px 18px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  &:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  &:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
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
