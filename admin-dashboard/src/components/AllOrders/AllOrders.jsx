import { useEffect, useMemo, useState } from "react";
import { Filter } from "../Filter/Filter"
import { FilterWrap, OrderBody, OrderCap, OrderCell, OrderHead, OrderHeader, OrderHeadName, OrderRow, OrderTable, OrderWrap, TableWrap } from "./AllOrders.styled"
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/order/orderOperation";
import { Paginator } from "../Paginator/Paginator";

export const AllOredrs=()=>{
const dispatch=useDispatch();
const orders = useSelector((state) => state.orders.orders);
const [searchTerm, setSearchTerm] = useState('');
 const [page, setPage] = useState(1);
 const itemPerPage=5;

const filteredSuppliers = useMemo(() => {
     if (!searchTerm) {
         return orders;
     }
     return orders.filter(supplier =>
         supplier.name.toLowerCase().includes(searchTerm) 

     );
 }, [searchTerm, orders]); 

 const totalItems = filteredSuppliers.length; 
 
 
 const startIndex = (page - 1) * itemPerPage;
 const endIndex = startIndex + itemPerPage;
 
 const visibleSuppliers = filteredSuppliers.slice(startIndex, endIndex)
 
 useEffect(()=>{
     dispatch(fetchOrders())
 },[dispatch])
 console.log("Products from Redux:", orders)

 const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
        setPage(1); 
    };

    
    return(
    
    <OrderWrap>
          <TableWrap>
             <FilterWrap>
                       <Filter 
            placeholder="User Name" 
            totalItems={totalItems} 
            itemsPerPage={itemPerPage}
            currentPage={page}
            onPageChange={setPage}
              value={searchTerm} 
                onChange={handleSearchChange}
            /></FilterWrap>
                <OrderTable>
                    <OrderCap>All orders</OrderCap>
                    <OrderHeader>
                    <OrderRow>
                        <OrderHeadName>User Info</OrderHeadName>
                        <OrderHead>Address</OrderHead>
                         <OrderHead>Products</OrderHead>
                        <OrderHead>Order date</OrderHead>
                         <OrderHead>Price</OrderHead>
                         <OrderHead>Status</OrderHead>
                  
                    </OrderRow>
                    </OrderHeader>
                    <OrderBody>
                        {visibleSuppliers.map((order)=>(  
                            <OrderRow key={order._id}>
                            <OrderCell>{order.name}</OrderCell>
                            <OrderCell>{order.address}</OrderCell>
                             <OrderCell>{order.products}</OrderCell>
                            <OrderCell>{order.date}</OrderCell>
                             <OrderCell>{order.price}</OrderCell>
                            <OrderCell type={order.status}  ><span>{order.status}</span></OrderCell>
                          
                        </OrderRow>))}
                    </OrderBody>
                </OrderTable>
                </TableWrap>
                <Paginator
                totalItems={totalItems}
                itemsPerPage={itemPerPage}
                currentPage={page}
                onPageChange={setPage}
                />
    </OrderWrap>)
}