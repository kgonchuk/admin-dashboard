import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const StatisticContainer = styled.div`
margin-top:20px;
  background-color: ${color.blueLight};
  @media screen and (min-width: ${breakpoints.medium}) {

  }
    @media screen and (min-width: ${breakpoints.large}) {


    }

`;
export const StatisticList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 335px;

@media screen and (min-width: 768px) {
    width: 704px;

  }
    @media screen and (min-width: 1440px) {
      width: 760px;;
    }


`;
export const StatisticItem = styled.li`
    width:156px;
 border: 1px solid ${color.grey} ;
border-radius: 8px;
 padding: 14px;
 background-color: ${color.white};
  @media screen and (min-width: 768px) {
    gap:28px;
    width: 220px;
  }

  @media screen and (min-width: 1440px) {
    width: 240px;
  }
 `;

 export const StatisticImgWrap= styled.div`
 display: flex;
 align-items: center;
 gap: 8px;
 margin-bottom: 32px;
 `;
 export const StatisticIcon= styled.svg`
 width: 18px;
  height: 18px;

  fill: none;
  stroke: currentColor;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
 `;
 export const StatisticText= styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 400;
    font-size: 12px;
    line-height: 1.16;
color: ${color.blackLight};

 `;
 export const StatisticNumber= styled.p`
 
 font-family: 'Inter', sans-serif;
 font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
color: ${color.black};`;