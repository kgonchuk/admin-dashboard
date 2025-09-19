import { LogoContainer, LogoImg } from "./Logo.styled";
import logo from "../../assets/images/loginForm.svg";


const Logo = () => {
  return <LogoContainer><LogoImg src={logo} alt="logo"/></LogoContainer>;
}
export default Logo;