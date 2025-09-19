import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const DashboardWrapper = styled.div`
  height: 100%;

  padding-top: 20px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`;

export const TableContainer=styled.div`
   display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }


`;
export const TableWrapper = styled.div`
  flex-shrink: 0;

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 20px) / 2);
  }
`;