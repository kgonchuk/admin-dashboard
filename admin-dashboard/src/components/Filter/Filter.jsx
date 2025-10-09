import { FilterButton, FilterContainer, FilterIcon, FilterInput } from "./Filter.styled";
import sprite from "../../assets/sprite-2.svg";


export const Filter = ({placeholder}) => {
  
  return (
  <FilterContainer>
    <FilterInput 
      type="text"
  id="name"
  name="name"
      
        placeholder={placeholder}/>
    <FilterButton>  
      <FilterIcon width={18} height={18} viewBox="0 0 32 32">
                  <use href={`${sprite}#icon-filter`}></use>
      </FilterIcon>
      Filter</FilterButton>
  </FilterContainer>)
};