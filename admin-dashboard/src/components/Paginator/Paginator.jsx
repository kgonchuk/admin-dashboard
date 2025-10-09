import { PaginatorBtn, PaginatorWrap } from "./Paginator.styled";
export const Paginator = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
 const totalPages=Math.ceil(totalItems / itemsPerPage)
 
  return(
<PaginatorWrap>

  {[...Array(totalPages)].map((_, index)=>(
    <PaginatorBtn key={index} onClick={()=>onPageChange(index + 1)}
   active={currentPage === + 1}
    ></PaginatorBtn>
    
  ))}

</PaginatorWrap>
 )
};