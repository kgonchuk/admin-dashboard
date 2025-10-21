import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const DatePickerWrapper = styled.div`
  position: relative;

  width:295px;
@media screen and (min-width: ${breakpoints.medium})  {
width:224px;
  }
  .date-picker-input {
    width: 100%;
     width:295px;
    padding: 12px 45px 12px 15px;
    border: 1px solid rgba(29, 30, 33, 0.1);
    border-radius: 60px;
    font-size: 12px;
    color: #333;
    background-color: #fff;
    outline: none;
    cursor: pointer;
     color:rgba(29, 30, 33, 0.4);

    &:focus {
      border-color: #00a86b;
      box-shadow: 0 0 0 2px rgba(0, 168, 107, 0.15);
    }
      @media screen and (min-width: ${breakpoints.medium})  {
width:224px;
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

export const FormInput=styled.input``;
export const CalendarIcon=styled.svg`
position:absolute;
top: 14px;
        right: 18px;
`;