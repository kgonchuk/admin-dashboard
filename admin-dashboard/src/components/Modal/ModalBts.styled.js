import styled from "styled-components";
import color from "../../global/globalColors";

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  margin-top: 26px;

  @media screen and (min-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const AddBtn = styled.button`
  width: 146px;
  height: 44px;
  border-radius: 60px;
  background:${color.greenPrimary};
  color:${color.white};
  font-size: 12px;
  font-weight: 500;
  outline: none;
  border: none;
  transition: background-color 0.5s ease-in-outxs;

  &:hover,
  &:focus {
 background:${color.greenSecondary};
    
  }


  @media screen and (min-width: 768px) {
    width: 133px;
    font-size: 14px;
  }
`;

export const CancelBtn = styled.button`
  width: 146px;
  height: 44px;
  border-radius: 60px;
  background:${color.backGround};
color:${color.backGroundSecond};
  font-size: 12px;
  font-weight: 500;
  outline: none;
  border: none;
  transition:  background-color 0.5s ease-in-outxs;

  &:hover,
  &:focus {
     background-color: transparent;
     color:${color.greenPrimary};
     border: 1px solid ${color.greenPrimary};
  }

  @media screen and (min-width: 768px) {
    width: 133px;
    font-size: 14px;
  }
`;