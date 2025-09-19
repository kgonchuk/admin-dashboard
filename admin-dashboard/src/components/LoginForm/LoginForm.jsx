import { Input, LoginButton, } from "./ LoginForm.styled";

import {Form, Formik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: ''
};
const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(20, 'Too Long!').required('Required')
});
const handleSubmit = (values) => {
  console.log(values);
};
 
const LoginForm = () => {
    return (


    <Formik 
    initialValues={initialValues} 
    validationSchema={schema}  
    onSubmit={handleSubmit}>
    {({ errors, touched }) => (
      <Form>
        <div>
          <Input name="email" type="email" placeholder="Email address" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
        </div>
        <div>
          <Input name="password" type="password" placeholder="Password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
        </div>
        <LoginButton type="submit">Login</LoginButton>
      </Form>
    )}
    </Formik>

);};
export default LoginForm;