import { useEffect } from "react";
import {selectSupplierError, selectSupplierLoading, selectSuppliers } from "../../redux/supplier/supplierSelector";
import { AddButton, FilterWrap, SupliersBody, SupliersCap, SupliersCell, SupliersHead, SupliersleHeader, SupliersRow, SupliersTable, SupliersWrap } from "./AllSupliers.style"
import { useDispatch, useSelector } from "react-redux";
import { fetchSuppliers } from "../../redux/supplier/supplierOperation";
import { Filter } from "../Filter/Filter";
import { Pagination } from "../Pagination/Pagination";
export const AllSupliers =()=>{
const dispatch=useDispatch();
const suppliers = useSelector(selectSuppliers);
const loading = useSelector(selectSupplierLoading);
const error = useSelector(selectSupplierError);
console.log("Redux state:", useSelector((state)=>state))

useEffect(()=>{
    dispatch(fetchSuppliers())
},[dispatch])
console.log("Supplers from Redux:", suppliers)
    return(
    <SupliersWrap>
        <FilterWrap>
           <Filter placeholder="User name"/>
           <AddButton>Add a new suppliers</AddButton>
        </FilterWrap>
        <SupliersTable>
            <SupliersCap>All suppliers</SupliersCap>
            <SupliersleHeader>
            <SupliersRow>
                <SupliersHead>Suppliers Info</SupliersHead>
                <SupliersHead>Address</SupliersHead>
                 <SupliersHead>Company</SupliersHead>
                <SupliersHead>Delivery date</SupliersHead>
                 <SupliersHead>Ammount</SupliersHead>
                <SupliersHead>Status</SupliersHead>
                <SupliersHead>Action</SupliersHead>
            </SupliersRow>
            </SupliersleHeader>
            <SupliersBody>
                {suppliers.map((supplier)=>(  
                    <SupliersRow key={supplier._id}>
                    <SupliersCell>{supplier.name}</SupliersCell>
                    <SupliersCell>{supplier.adress}</SupliersCell>
                     <SupliersCell>{supplier.company}</SupliersCell>
                    <SupliersCell>{supplier.date}</SupliersCell>
                     <SupliersCell>{supplier.amount}</SupliersCell>
                    <SupliersCell>{supplier.status}</SupliersCell>
                     <SupliersCell></SupliersCell>
                </SupliersRow>))}
              
            </SupliersBody>
        </SupliersTable>

    </SupliersWrap>)
}