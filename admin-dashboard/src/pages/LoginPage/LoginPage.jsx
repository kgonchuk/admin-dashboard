import LoginForm from "../../components/LoginForm/LoginForm";
import { FormContainer, HeadBlock, HeadLogo, HeadTitle, HeadTitleBlock, LoginPageContainer, TableImg } from "./LoginPage.styled";
import tablet from '../../assets/images/tablet.png';
import loginForm from '../../assets/images/loginForm.svg'




const LoginPage = () => {
  return (
    <FormContainer>
      <HeadBlock>
  <img src={loginForm} alt='mySvgImage' width={44} height={44} />
<HeadLogo>E-Pharmacy</HeadLogo>
</HeadBlock>
<HeadTitleBlock>
     <TableImg src={tablet} alt='mySvgImage' />
    <HeadTitle>Your medication, delivered Say goodbye to all <span>your healthcare</span> worries with us </HeadTitle>
    </HeadTitleBlock>
      <LoginForm />
     
    </FormContainer>
  );
};

export default LoginPage;