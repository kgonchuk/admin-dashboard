import { useDispatch } from "react-redux";
import  sprite  from "../../assets/sprite-2.svg";
import { LogOutBtnStyled } from "./LogOutBtn.styled";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/authOperation";
import toast from "react-hot-toast";

export const LogOutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

     const handleLogOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
      navigate("/login");
    } catch (error) {
      toast.error("Log out failed. Something went wrong.");
      console.log("Logout error:", error);
    }
  };

  return <LogOutBtnStyled onClick={handleLogOut}> <svg  width={44} height={44}>
        <use  href={`${sprite}#icon-logout`}  />
      </svg></LogOutBtnStyled>;
}