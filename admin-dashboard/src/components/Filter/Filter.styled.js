import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  // margin-top:40px;
    @media screen and (min-width: ${breakpoints.medium})  {
      margin-top:0;
      

  }
`;
export const FilterInput = styled.input`
border-radius:60px;
  padding: 13px 18px;
  border: 1px solid rgba(29, 30, 33, 0.1);
font-weight: 400;
  font-size: 12px;
width: 215px;
line-height: 1.5;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
    @media (min-width: 768px) {
    width: 224px;
`;
export const FilterButton = styled.button`
  padding: 8px 16px;
  background-color: ${color.greenPrimary};
  color: white;
  border-radius: 60px;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  width: 112px;
  @media (min-width: 768px) {
    width: 116px;
  `

  export const FilterIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
stroke: white;
`