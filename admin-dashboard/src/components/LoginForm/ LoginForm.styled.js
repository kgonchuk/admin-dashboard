import { Field } from 'formik';
import styled from 'styled-components';
import color from '../../global/globalColors';
import { breakpoints } from '../../global/breakPoints';


  export const InputBlock = styled.div`
  display: flex;
    flex-direction: column;
    gap: 14px;
  ;` ;

export const Input = styled(Field)`
display: block;
 padding: 0 0 0 18px;
  width: 335px;
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
    @media screen and (min-width: ${breakpoints.medium}) {
     width: 323px;
        }
`;
export const LoginButton = styled.button`
  margin-top: 40px;
  padding: 14px 0;
  width: 335px;
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
      @media screen and (min-width: ${breakpoints.medium}) {
     width: 323px;
        }
`;

export const EyeToggleBtn=styled.button`
 position: absolute;
  top: 470px;
  right: -25px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;

  svg {
   
    display: inline-block;
    width: 1em;
    height: 1em;
    // stroke-width: 0;
    // stroke: ${color.black};
    // fill: currentColor;
  }

  @media screen and (min-width: 768px) {
    right: 260px;
  }

  @media screen and (min-width: 1440px) {
    right: 290px;
    top: 397px;
  }
`