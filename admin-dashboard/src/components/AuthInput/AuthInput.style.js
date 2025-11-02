import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: #444;
`;

export const InputField = styled.input`
  padding: 10px 12px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  font-size: 15px;
  &:focus {
    border-color: #2b65ff;
    outline: none;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;