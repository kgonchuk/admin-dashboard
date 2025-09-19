import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";
export const TableContainer = styled.div`
  width: 335px;
  margin-top: 20px;

  @media screen and (min-width: ${breakpoints.medium})  {
   width: 100%;
}

   @media screen and (min-width: ${breakpoints.large})  {
   width: 704px;
  
    }
`;

export const Table = styled.table`
width:335px;
  padding: 0 14px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 0 0 8px 8px;
  background-color: #ffffff;
  border-spacing: 0;
  border-top: 0;
   @media screen and (min-width: ${breakpoints.medium})  {
   padding: 0 20px;
   width: 704px;

    }
   @media screen and (min-width: ${breakpoints.large})  {
   padding: 0 20px;
   width: 630px;

    }
`;

export const Caption = styled.caption`
 padding: 14px;
  border-radius: 8px 8px 0 0;
  background-color: #e7f1ed;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.25;
  color: #1d1e21;
  text-align: left;
  @media screen and (min-width: ${breakpoints.medium})  {
     font-size: 18px;
  line-height: 1.33;
   padding: 20px;
    }

   @media screen and (min-width: ${breakpoints.large})  {
 font-size: 18px;
  line-height: 1.33;
  
    }
`;

export const TableHead = styled.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 14px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 14px 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: rgba(29, 30, 33, 0.4);
  text-align: left;
  border-bottom:1px solid #ddd;
  @media screen and (min-width: ${breakpoints.medium})  {
     font-size: 14px;
  line-height: 1.28;
  padding: 20px 0;
    }

   @media screen and (min-width: ${breakpoints.large})  {

  
    }
`;

export const TableCellType = styled.td`

padding:14px 28px 14px 0;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
   @media screen and (min-width: 768px) {
    font-size: 14px;}
  @media screen and (min-width: 1440px) {
    font-size: 14px;
     padding:20px 28px 20px 0;}
   
 &:last-child {
     border-bottom: none;
  }
  
  span {
    display: inline-block;
    padding: 4px 13.5px;
    width:80px;
    text-align:center;
    border-radius: 40px;
    background-color: ${({ type }) => {
      switch (type) {
        case "Expense":
          return `${color.redLight}`;
        case "Error":
          return `${color.grey}`;
        case "Income":
          return `${color.greenLight}`;
        default:
          return "rgba(0, 0, 0, 0.05)";
      }
    }};
  
  color: ${({ type }) => {
    switch (type) {
      case "Expense":
        return "var(--cancel-color)";
      case "Error":
        return "var(--main-text-color)";
      case "Income":
        return "var(--main-color)";
      default:
        return "inherit";
    }
  }};

 
`;

export const TableCellName = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    
`;

export const TableCellAmount = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  text-align: right;
  color: ${({ type }) => {
    switch (type) {
      case "Expense":
        return "var(--cancel-color)";
      case "Error":
        return "var(--main-text-color)";
      case "Income":
        return "var(--main-color)";
      default:
        return "inherit";
    }
  }};

  @media screen and (min-width: 768px) {
    font-size: 16px;
`;