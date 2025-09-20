import LoginForm from "../../components/LoginForm/LoginForm";
import { FormContainer, HeadBlock, HeaderFormWrap, HeaderImg, HeadLogo, HeadTitle, HeadTitleBlock, TableImg } from "./LoginPage.styled";
import tablet from '../../assets/images/tablet.png';
import loginForm from '../../assets/images/loginForm.svg'
import img from '../../assets/images/elements.png'




const LoginPage = () => {
  return (
    <FormContainer>

      <HeadBlock>
  <img src={loginForm} alt='mySvgImage' width={44} height={44} />
<HeadLogo>E-Pharmacy</HeadLogo>
</HeadBlock>

<HeaderFormWrap>

<HeadTitleBlock>
     <TableImg src={tablet} alt='mySvgImage' />
    <HeadTitle>Your medication, delivered Say goodbye to all <span>your healthcare</span> worries with us </HeadTitle>
    </HeadTitleBlock>

      <LoginForm />

     </HeaderFormWrap>
     <HeaderImg>
<img src={img} alt="heder"/>
     </HeaderImg>

    </FormContainer>
  );
};

export default LoginPage;