import { StatisticContainer, StatisticIcon, StatisticImg, StatisticImgWrap, StatisticItem, StatisticList, StatisticNumber, StatisticText, StstisticList } from "./Statistic.styled"
import sprite from "../../assets/sprite-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCustomers, selectAllProducts, selectAllSuppliers, selectDashboardLoading } from "../../redux/dashboard/dashboardSelector";
import { useEffect } from "react";
import { fetchDashboard } from "../../redux/dashboard/dashboardOperation";


export const Statistic = () => {
  const dispatch=useDispatch();
   const allProducts = useSelector(selectAllProducts);
    const allSuppliers = useSelector(selectAllSuppliers);
    const allCustomers = useSelector(selectAllCustomers);
    
    // Визначаємо відображувані значення. Якщо null або undefined, відображаємо 0.
    const displayProducts = allProducts == null ? 0 : allProducts;
    const displaySuppliers = allSuppliers == null ? 0 : allSuppliers;
    const displayCustomers = allCustomers == null ? 0 : allCustomers;

  useEffect(() => {
    dispatch(fetchDashboard())
  }, [dispatch]);
  const isLoading = useSelector(selectDashboardLoading);
    // ...

    if (isLoading) {
        return <StatisticContainer>Loading statistics...</StatisticContainer>;
    }
  return (
    <StatisticContainer>
        <StatisticList>
            <StatisticItem>
                <StatisticImgWrap>
                 <StatisticIcon>
                   <use href={`${sprite}#icon-stat-products`}/>
                 </StatisticIcon>
                 <StatisticText>All products</StatisticText>
                </StatisticImgWrap>
                <StatisticNumber>{displayProducts}</StatisticNumber>
            </StatisticItem>
            <StatisticItem>  
               <StatisticImgWrap>
                <StatisticIcon> 
                  <use href={`${sprite}#icon-stat-products`}/>
                  </StatisticIcon> 
                 <StatisticText>All suppliers</StatisticText>
                </StatisticImgWrap>
                   <StatisticNumber>{displaySuppliers}</StatisticNumber>
            </StatisticItem>
            <StatisticItem>  
              <StatisticImgWrap>
                    <StatisticIcon> 
                  <use href={`${sprite}#icon-stat-users`}/>
                  </StatisticIcon> 
                <StatisticText>All Customers </StatisticText>
                </StatisticImgWrap>
                <StatisticNumber>{displayCustomers}</StatisticNumber>
            </StatisticItem>
        </StatisticList>
    </StatisticContainer>
  )
}
