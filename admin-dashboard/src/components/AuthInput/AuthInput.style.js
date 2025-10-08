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
  border: 1px solid #ccc;
  border-radius: 6px;
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