import styled from "styled-components";
import color from "../../../global/globalColors";
export const ButtonPlus=styled.button`
 align-self: start;
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: inherit;

  background-color: transparent;
  border: 0;

  &:hover span,
  &:focus span {
    background-color: ${color.greenLight};
  }
`;
export const ButtonWrap=styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;

  background-color: ${color.greenPrimary};
  border-radius: 100%;

 transition: background 0.2s ease;;

`;
export const ButtonIcon=styled.svg`
 width: 18px;
  height: 18px;

  fill: #fff;
`;