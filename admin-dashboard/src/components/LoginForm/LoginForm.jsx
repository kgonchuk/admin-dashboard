

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { logIn } from "../../redux/auth/authOperation";
import AuthInput from "../AuthInput/AuthInput";
import { LoginButton, EyeToggleBtn, InputBlock } from "./ LoginForm.styled";

const schema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .max(20, "Password too long")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { accessToken, loading, error } = useSelector((state) => state.auth || {});

  // 🔐 Якщо користувач уже авторизований — редірект
  if (accessToken) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Submitting form with values:", values);
    try {
      const result = await dispatch(logIn(values));
      console.log("Login result:", result);
      if (logIn.fulfilled.match(result)) {
        navigate("/dashboard");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputBlock>
            <AuthInput
              label="Email"
              name="email"
               id="email"
              type="email"
              placeholder="Enter your email"
            />

            <div style={{ position: "relative" }}>
              <AuthInput
                label="Password"
                 id="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <EyeToggleBtn
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </EyeToggleBtn>
            </div>

            {error && (
              <div style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
                {error}
              </div>
            )}

            <LoginButton type="submit" disabled={isSubmitting || loading}>
              {loading ? "Loading..." : "Login"}
            </LoginButton>
          </InputBlock>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;