import { Field } from 'formik';
import styled from 'styled-components';
import color from '../../global/globalColors';


  export const InputBlock = styled.div`
  ;` ;

export const Input = styled(Field)`
display: block;
    margin-bottom: 14px;
 padding: 0 0 0 18px;
  width: 303px;
  height: 42px;
  background:${color.white};
  border: 1px solid #1D1E211A;
  border-radius: 60px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0em;
  color:${color.black};
  &::placeholder {
    color:${color.blackLight};
  }
  &:focus {
    border: 1px solid ${color.greenPrimary};
    outline: none;
  }
`;
export const LoginButton = styled.button`
  margin-top: 40px;
  padding: 14px 0;
  width: 323px;
  background: ${color.greenPrimary};
  border-radius: 60px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0em;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${color.greenSecondary};
  }
`;