import styled from "styled-components";
import color from '../../global/globalColors'
import { breakpoints } from "../../global/breakPoints";

export const RecentWrap= styled.div`
 width: 335px;
  margin-top: 20px;


  @media screen and (min-width: ${breakpoints.medium})  {
   max-width: 704px;

    }

`;

export const TableCap=styled.caption`
 padding: 14px;
  border-radius: 8px 8px 0 0;
  background-color: #e7f1ed;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: #1d1e21;
  text-align: left;
  @media screen and (min-width: ${breakpoints.medium})  {
   font-size: 18px;
  line-height: 1.33;
padding: 20px;
    }

`;

export const TableHeader = styled.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 14px;
`;

export const TableRow = styled.tr``;
export const TableHead = styled.th`
  padding: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: rgba(29, 30, 33, 0.4);
  text-align: left;
  border-bottom:1px solid #ddd;
   border-left:1px solid #ddd;
   &:last-child {
     border-right: none;
  }
     &:first-child {
     border-left: none;
  }
      @media screen and (min-width: ${breakpoints.medium})  {
   font-size: 14px;
  line-height: 1.28;
  padding: 20px;

    }
`;
export const TableHeadName = styled.th`
  padding: 14px 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: rgba(29, 30, 33, 0.4);
  text-align: left;
  border-bottom:1px solid #ddd;
   border-left:1px solid #ddd;
   &:last-child {
     border-right: none;
  }
     &:first-child {
     border-left: none;
  }
      @media screen and (min-width: ${breakpoints.medium})  {
   font-size: 14px;
  line-height: 1.28;
  padding: 20px 0;

    }
`;

  export const RecentTable=styled.table`
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
width: 630px;

  
    }

`;
export const TableBody = styled.tbody``;

export const TableTd=styled.td`
white-space:nowrap;
background: ${color.white}; 
padding: 14px 10px 14px 0;
font-size: 12px;
line-height:1.16;
color: #111827;
border-left:1px solid #e5e7eb;
border-bottom:1px solid #e5e7eb;

&:last-child {
     border-right: none;
  }
     &:first-child {
     border-left: none;
  }
@media screen and (min-width: ${breakpoints.medium})  {
font-size: 16px;
line-height:1.12;
padding: 20px;
    }
`;
export const TableCount=styled.td`
white-space:nowrap;
background: ${color.white}; 
padding: 30px 10px;
font-size: 12px;
line-height:1.16;
color: #111827;
border-left:1px solid #e5e7eb;
border-bottom:1px solid #e5e7eb;

&:last-child {
     border-right: none;
  }
     &:first-child {
     border-left: none;
  }
@media screen and (min-width: ${breakpoints.medium})  {
font-size: 16px;
line-height:1.12;
padding: 29px 20px;
    }
`;

export const TableTdEmail=styled.td`
padding:30px 10px;
font-size: 12px;
line-height:14px;
color: #111827;
background: ${color.white};
border-left:1px solid #e5e7eb;
border-bottom:1px solid #e5e7eb;
@media screen and (min-width: ${breakpoints.medium})  {
padding: 29px 20px;
font-size: 16px;
line-height:1.1;
    }
`;

export const CustomerImgBlock=styled.div`;
@media screen and (min-width: ${breakpoints.medium})  {
display:flex;
align-items:center;
gap:9px
    }

`;
export const CustomImg=styled.img`
width: 24px;
height: 24px;
border-radius: 30px;
background-color: #DCDDDF;
margin-bottom:8px;
@media screen and (min-width: ${breakpoints.medium})  {
width: 36px;
height: 36px;
margin-bottom:0px;
    }
`;