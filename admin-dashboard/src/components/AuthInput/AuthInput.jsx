import React from "react";
import { Field, ErrorMessage } from "formik";
import { InputWrapper, InputLabel, InputField, ErrorText } from "./AuthInput.style";

const AuthInput = ({ label, name, type = "text", placeholder, icon, ...rest }) => {
  return (
    <InputWrapper>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <div style={{ position: "relative" }}>
        <Field
          as={InputField}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        {icon && <span style={{ position: "absolute", right: 10, top: 10 }}>{icon}</span>}
      </div>
      <ErrorMessage name={name} component={ErrorText} />
    </InputWrapper>
  );
};

export default AuthInput;