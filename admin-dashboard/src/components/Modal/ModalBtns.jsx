import React from "react";
import {
    AddBtn,
  BtnWrap,
  CancelBtn,
} from "./ModalBts.styled";

const ButtonsModal = ({ title, cancelAction }) => {
  return (
    <BtnWrap>
      <AddBtn type="submit">{title}</AddBtn>
      <CancelBtn type="button" onClick={() => cancelAction(false)}>
        Cancel
      </CancelBtn>
    </BtnWrap>
  );
};

export default ButtonsModal;