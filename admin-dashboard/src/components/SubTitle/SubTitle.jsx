import { useLocation } from "react-router-dom";
import { SubTitleContainer, SubTitleSpan, SubTitleText, SubTitltLink } from "./SubTitle.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/auth/authOperation";

export const SubTitle = ({ text }) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth); 
    const location=useLocation();
    const dashboard=location.pathname==="/dashboard" && "Dashboard";
    const allOrders=location.pathname==="/orders" && "All Orders";
    const allProducts=location.pathname==="/products" && "All Products";
    const allSuppliers=location.pathname==="/suppliers" && "All Suppliers";
    const allCustomers=location.pathname==="/customers" && "All Customers";

useEffect(() => {
  if(!user) dispatch(getCurrentUser());
  
}, [dispatch, user]);

  return (
    <SubTitleContainer>
<SubTitltLink>{dashboard || allOrders || allProducts || allSuppliers || allCustomers}</SubTitltLink>
<SubTitleSpan>|</SubTitleSpan>
<SubTitleText> {user?.email}</SubTitleText>
      </SubTitleContainer>
  );
}   