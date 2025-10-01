import { Input, InputBlock, LoginButton, } from "./ LoginForm.styled";
import {Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { EyeToggleBtn } from "../../components/LoginForm/ LoginForm.styled";
import { useState } from "react";
import sprite from "../../assets/sprite-2.svg";
import { Navigate, useNavigate } from "react-router-dom";

const initialValues = {
  email: '',
  password: ''
};
const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(20, 'Too Long!').required('Required')
});



 
const LoginForm = () => {
   const navigate = useNavigate();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);





 const handleLogin=()=>{
  navigate('/dashboard');
 }

    return (


    <Formik 

    initialValues={initialValues} 
    validationSchema={schema}  
    onSubmit={handleLogin} >
    {({ errors, touched }) => (

      <Form>
        <InputBlock>
        <div >
          <Input name="email" type="email" placeholder="Email address" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
        </div>
        <div >
          <Input name="password"placeholder="Password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
           
           <EyeToggleBtn type="button"   onClick={() => setIsVisiblePassword(!isVisiblePassword)}>
              
               {/* {isVisiblePassword ? (
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-eye`}></use>
                </svg>
              ) : (
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-eye-off`}></use>
                </svg>
              )}
          */}
          
              </EyeToggleBtn>
        </div>
        </InputBlock>
        <LoginButton type="submit"  >Login</LoginButton>
      </Form>
  
    )}
    </Formik>

);};
export default LoginForm;