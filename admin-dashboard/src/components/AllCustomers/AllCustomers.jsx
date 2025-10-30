import { useEffect, useMemo, useState } from "react";
import { CustomerBody, CustomerCap, CustomerCell, CustomerHead, CustomerHeader, CustomerHeadName, CustomerRow, CustomerTable, CustomerWrap, FilterWrap, TableWrap } from "./AllCustomers.styled"
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../redux/cusrtomer/customerOperation";
import { Filter } from "../Filter/Filter";
import { Paginator } from "../Paginator/Paginator";

export const AllCustomers=()=>{
    const dispatch=useDispatch();
const customers = useSelector((state) => state.customers.customers);
const [searchTerm, setSearchTerm] = useState('');
 const [page, setPage] = useState(1);
 const itemPerPage=5;

const filteredCustomers = useMemo(() => {
     if (!searchTerm) {
         return customers;
     }
     return customers.filter(supplier =>
         supplier.name.toLowerCase().includes(searchTerm) 

     );
 }, [searchTerm, customers]); 

 const totalItems = filteredCustomers.length; 
 
 
 const startIndex = (page - 1) * itemPerPage;
 const endIndex = startIndex + itemPerPage;
 
 const visibleCustomers = filteredCustomers.slice(startIndex, endIndex)
 
 useEffect(()=>{
     dispatch(fetchCustomers())
 },[dispatch])
 console.log("Products from Redux:", customers)

 const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
        setPage(1); 
    };
    return( 
    <CustomerWrap>
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
                    <CustomerTable>
                        <CustomerCap>Customers Data</CustomerCap>
                        <CustomerHeader>
                        <CustomerRow>
                            <CustomerHeadName>User Info</CustomerHeadName>
                             <CustomerHead>Email</CustomerHead>
                            <CustomerHead>Address</CustomerHead>
                            <CustomerHead>Phone</CustomerHead>
                             <CustomerHead>Register date</CustomerHead>

                      
                        </CustomerRow>
                        </CustomerHeader>
                        <CustomerBody>
                            {visibleCustomers.map((customer)=>(  
                                <CustomerRow key={customer._id}>
                                <CustomerCell>{customer.name}</CustomerCell>
                                <CustomerCell>{customer.email}</CustomerCell>
                                 <CustomerCell>{customer.address}</CustomerCell>
                                <CustomerCell>{customer.phone}</CustomerCell>
                                 <CustomerCell>{customer.date}</CustomerCell>

                              
                            </CustomerRow>))}
                        </CustomerBody>
                    </CustomerTable>
                    </TableWrap>
                    <Paginator
                    totalItems={totalItems}
                    itemsPerPage={itemPerPage}
                    currentPage={page}
                    onPageChange={setPage}
                    />
        </CustomerWrap>)
}
