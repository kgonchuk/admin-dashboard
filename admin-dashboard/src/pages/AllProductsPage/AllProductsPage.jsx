import { AllProducts } from "../../components/AllProducts/AllProducts";
import { Filter } from "../../components/Filter/Filter";
import { AllOrdersPageContainer } from "./AllProductsPage.styled";

const AllProductsPage = () => {
  return (
    <AllOrdersPageContainer>
         <Filter />
   <AllProducts/>
       </AllOrdersPageContainer>
  )
}           

export default AllProductsPage;