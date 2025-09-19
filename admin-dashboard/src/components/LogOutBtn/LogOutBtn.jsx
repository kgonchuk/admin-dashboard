import  sprite  from "../../assets/sprite-2.svg";
import { LogOutBtnStyled } from "./LogOutBtn.styled";

export const LogOutBtn = () => {
  const handleLogOut = () => {}
   

  return <LogOutBtnStyled onClick={handleLogOut}> <svg  width={44} height={44}>
        <use  href={`${sprite}#icon-logout`}  />
      </svg></LogOutBtnStyled>;
}