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
export const Form=styled.form`

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

export const BtnWrap=styled.div`
margin-top:40px;

`;

export const AddBtn=styled.button`
font-size:12px;
font-weight:500;
font-weight:500;
text-align:center;
border:none;
padding:13px;
background:${color.greenPrimary};
border-radius:60px;
color:${color.white};
width:146px;


  @media screen and (min-width: ${breakpoints.medium})  {
font-size:14px;
margin-right:8px;
width:133px;
}


`;
export const CancelBtn=styled.button`
font-size:12px;
font-weight:500;
font-weight:500;
text-align:center;
border:none;
padding:13px;
background:${color.backGround};
border-radius:60px;
color:${color.backGroundSecond};
width:140px;

@media screen and (min-width: ${breakpoints.medium})  {
font-size:14px;
margin-right:8px;
width:133px;    
}


`;



export const StyledSelect=styled.select`
width:100%;
padding:13px 18px;
font-size:12px; 
border:none;
border-radius:60px;
appearance:none;
background-color:transparent;
cursor:pointer;
color:${color.backGround};
outline:none;
z-index:2;
position:relative;
@media screen and (min-width: ${breakpoints.medium})  {
width:224px;
  }
`;


export const SelectWrap = styled.div`
  position: relative;
  width: 100%;
  @media screen and (min-width: ${breakpoints.medium})  {
width:224px;
  }
`;

export const StyledOption=styled.option`

background-colo:#f5f5f5;
color:#333;
font-size:15px;
padding:10px;
border-radius:10px;
cursor:pointer;
&:hover{
background-colo:#00a86b;
color:#fff;
width:250px;
height:100px;

}
`;

export const SelectIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: #555;
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.$open ? "180deg" : "0deg")});
`;


// /////////////////////
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

export const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
@media screen and (min-width: ${breakpoints.medium})  {
width:224px;
  }
  .date-picker-input {
    width: 100%;
    padding: 12px 45px 12px 15px;
    border: 1px solid rgba(29, 30, 33, 0.1);
    border-radius: 60px;
    font-size: 12px;
    color: #333;
    background-color: #fff;
    outline: none;
    cursor: pointer;

    &:focus {
      border-color: #00a86b;
      box-shadow: 0 0 0 2px rgba(0, 168, 107, 0.15);
    }
  }

  svg {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    fill: #555;
    cursor: pointer;
    transition: fill 0.2s ease;

    &:hover {
      fill: #00a86b;
    }
  }

  /* Стилі для календаря */
  .react-datepicker {
    font-family: inherit;
    border-radius: 12px;
    border: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .react-datepicker__header {
    background-color: #00a86b;
    border-bottom: none;
    color: white;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #00a86b;
    color: white;
  }

  .react-datepicker__day:hover {
    background-color: rgba(0, 168, 107, 0.2);
  }
`;