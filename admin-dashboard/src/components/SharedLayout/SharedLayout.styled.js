import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const MainContainer = styled.div`

 width: 100%;
  padding-right: 20px;
  padding-left: 20px;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 40px;
    padding-left: 40px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  min-height: calc(100vh - 79px);

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 81px);
  }
`;