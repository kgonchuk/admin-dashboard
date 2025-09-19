import Logo from "../Logo/Logo";
import { LogOutBtn } from "../LogOutBtn/LogOutBtn";
import { SubTitle } from "../SubTitle/SubTitle";
import { Title } from "../Title/Title";
import { HeaderStyled, HeaderTitle, LogOutContainer, } from "./Header.styled";


const Header = ({onOpenSidebar}) => {
   
   
  return (
    
    <HeaderStyled>
     <Logo />
     <HeaderTitle> 
      <Title />
      <SubTitle/>
     </HeaderTitle>
    
    <LogOutContainer>
      <LogOutBtn/>
    </LogOutContainer>
     


    </HeaderStyled>
    
  )
}
export default Header;