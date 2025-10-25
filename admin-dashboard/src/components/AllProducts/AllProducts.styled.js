import styled from "styled-components";
import color from '../../global/globalColors'
import { breakpoints } from "../../global/breakPoints";


export const ProductsWrap= styled.div`
  margin-top: 20px;
  @media screen and (min-width: ${breakpoints.medium})  {
margin-bottom:20px;
}
@media screen and (min-width: ${breakpoints.large})  {
}

`;
export const AddButton=styled.button`
font-size:12px;
font-weight:500;
padding:13px 30px;
background:transparent;
border-radius:60px;
border:1px solid rgba(89, 177, 122, 0.5);
margin-bottom:20px;
width:177px;
margin-top:16px;
  @media screen and (min-width: ${breakpoints.medium})  {
    margin-top:0;
  margin-bottom:0;
}

`;

export const ProductsCap=styled.caption`
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

export const ProductsleHeader = styled.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 14px;
`;

export const ProductsRow = styled.tr``;
export const ProductsHeadName=styled.th`
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
export const ProductsHead = styled.th`
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
  padding: 20px;

    }
`;


  export const ProductsTable=styled.table`
  width: 100%; 
  padding: 0 14px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 0 0 8px 8px;
  background-color: #ffffff;
  border-spacing: 0;
  border-top: 0;
  @media screen and (min-width: ${breakpoints.medium})  {
  padding: 0 20px;
  // width: 704px;
    }

   @media screen and (min-width: ${breakpoints.large})  {
// width: 630px;

  
    }


`;
export const ProductsBody = styled.tbody``;

export const ProductsCell=styled.td`
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
export const FilterWrap=styled.div`
display:block;
 @media screen and (min-width: 768px) {
   display:flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:20px;

  }
`;
export const TableWrap=styled.div`
  max-width: 100%;
   overflow-x: auto; 
    -webkit-overflow-scrolling: touch; 
`;

export const BtnWrap=styled.div`
display:flex;
align-items:center;
gap:8px;
`;

export const EditBtn=styled.button`
 padding: 8px;
width:32px;
height:32px;
  background-color: transparent;
  border-radius:100px;
  border: none;
  border: 1px solid ${color.greenPrimary};
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(89, 177, 122, 1);
  @media (min-width: 768px) {
  


`;
export const EditIcon=styled.svg`
  width: 14px;
  height: 14px;
  background-color:transparent;
  fill: transparent;
stroke:${color.greenPrimary};

`;

export const DeleteBtn=styled.button`
 padding: 8px;
width:32px;
height:32px;
  background-color: transparent;
  border-radius:100px;
  border: none;
  border: 1px solid ${color.redLight};
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(89, 177, 122, 1);
  @media (min-width: 768px) {
  


`;
export const DeleteIcon=styled.svg`
  width: 14px;
  height: 14px;
  background-color:transparent;
  fill: transparent;
stroke:${color.redPrimary};

`;