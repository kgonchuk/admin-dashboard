import { useLocation } from "react-router-dom";
import { SubTitleContainer, SubTitleSpan, SubTitleText, SubTitltLink } from "./SubTitle.styled";

export const SubTitle = ({ text }) => {
    const location=useLocation();
    const dashboard=location.pathname==="/dashboard" && "Dashboard";
    const allOrders=location.pathname==="/orders" && "All Orders";
    const allProducts=location.pathname==="/products" && "All Products";
    const allSuppliers=location.pathname==="/suppliers" && "All Suppliers";
    const allCustomers=location.pathname==="/customers" && "All Customers";
  return (
    <SubTitleContainer>
<SubTitltLink>{dashboard || allOrders || allProducts || allSuppliers || allCustomers}</SubTitltLink>
<SubTitleSpan>|</SubTitleSpan>
<SubTitleText> vendor@gmail.com</SubTitleText>
      </SubTitleContainer>
  );
}   