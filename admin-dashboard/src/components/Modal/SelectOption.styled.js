import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";
import color from "../../global/globalColors";

export const SelectWrap = styled.div`
  position: relative;
  width: 100%;
  border-radius:60px;
  @media screen and (min-width: ${breakpoints.medium})  {
width:224px;
  }
.select-option{
border-radius:60px;
color:: #34a853;
}
`;
const minTablet = '@media only screen and (min-width: 768px)';

export const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: '100%',
    padding: `12px 17px`,
    borderRadius: `60px`,
    border: `1px solid ${color.backGround}`,
    cursor: 'pointer',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    transition:`transition 250ms linear`,
    '&:hover': {
      borderColor: ` ${color.greenBorder}`,
    },
    '& .css-tj5bde-Svg': {
      transform: state.menuIsOpen && 'rotate(180deg)'
    },
    [minTablet]: {
      width: 220
    }
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: 0,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5,
    color: ` ${color.backGround}`
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    marginLeft: 0,
    marginRight: 0,
    color: ` ${color.blackLight}`,
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    marginLeft: 0,
    marginRight: 0,
    color: 'inherit'
  }),
  input: baseStyles => ({
    ...baseStyles,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    padding: 0,
    height: 16,
    width: 16,
    color:` ${color.blackLight}`,
    '&:hover': {
      color: ` ${color.blackLight}`,
    },
    '& .css-tj5bde-Svg': {
      width: '100%',
      height: '100%',
      transition: `transition 250ms linear`,
    }
  }),
  menu: baseStyles => ({
    ...baseStyles,
    height: 70,
    marginTop: `4px`,
    marginBottom: 0,
    paddingTop: `8px`,
    paddingRight: `8px`,
    paddingBottom: `8px`,
    zIndex: 10,
    backgroundColor:` ${color.greenPrimary}`,
    borderRadius: 15,
    boxShadow: 'none',
    border: 'none',
    [minTablet]: {
      marginTop: `8px`,
    }
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    height: '100%',
    paddingTop: 0,
    paddingBottom: 0,
    '&::-webkit-scrollbar': {
      width: 6
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 12,
      background: 'rgba(255, 255, 255, 0.4)'
    }
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    paddingTop: `3px`,
    paddingBottom: `3px`,
    paddingLeft: `17px`,
    paddingRight: `14px`,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '-0.02em',
    color: [
      state.isSelected ? `${color.white}` :`${color.black}`
    ],
    cursor: 'pointer',
    backgroundColor: 'transparent',
    // transition: theme.transition('color'),
    '&:hover': {
      color: `${color.backGround}`
    },
    '&:active': {
      backgroundColor: 'transparent'
    },
    [minTablet]: {
      fontSize: 14,
      lineHeight: 1.28571
    }
  })
};