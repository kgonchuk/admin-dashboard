import { FilterButton, FilterContainer, FilterIcon, FilterInput } from "./Filter.styled";
import sprite from "../../assets/sprite-2.svg";

export const Filter = () => {
  return (<FilterContainer>
    <FilterInput type="text" placeholder="Product  Name" />
    <FilterButton>  <FilterIcon width={18} height={18} viewBox="0 0 32 32">
                  <use href={`${sprite}#icon-filter`}></use>
                </FilterIcon>Filter</FilterButton>
  </FilterContainer>)
};