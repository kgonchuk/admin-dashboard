import { useEffect, useMemo, useState } from "react";
import { AddBtnIcon, AddButton, EditBtn, EditIcon, FilterWrap, SupliersBody, SupliersCap, SupliersCell, SupliersHead, SupliersleHeader, SupliersRow, SupliersTable, SupliersWrap, TableWrap } from "./AllSupliers.style"
import { useDispatch, useSelector } from "react-redux";
import { fetchSuppliers } from "../../redux/supplier/supplierOperation";
import { Filter } from "../Filter/Filter";
import { Paginator } from "../Paginator/Paginator";
import sprite from '../../assets/sprite-2.svg'
import { AddNewSuppliers } from "../AddNewSuppliers/AddNewSuppliers";
import { EditSupplier } from "../EditSupplier/EditSupplier";
import { selectSuppliers } from "../../redux/supplier/supplierSelector";
import { AddBtnPlus } from "../common/AddBtnPlus/AddBtnPlus";


export const AllSupliers =()=>{
const dispatch=useDispatch();
const suppliers = useSelector(selectSuppliers);
 const [page, setPage] = useState(1);
 const itemPerPage=5;
 const [editingSupplier, setEditingSupplier] = useState(null);
const [openEditModal, setOpenEditModal]= useState(false)
 const [openModal, setOpenModal] = useState(false);
 const [searchTerm, setSearchTerm] = useState('');

 const handlModalOpen = () => {
    setOpenModal(true);
  };

    const handleEditOpen=(supplierData)=>{
        setEditingSupplier(supplierData)
    setOpenEditModal(true)
  }
  
  const hadleModalClose = () => {
    setOpenModal(false);
     setOpenEditModal(false)
     setEditingSupplier(null)
  };
  const handleModalCloseEsc = (e) => {
    if (e.code === "Escape") {
      hadleModalClose();
    }
  };
  window.addEventListener("keydown", handleModalCloseEsc);



const filteredSuppliers = useMemo(() => {
    if (!searchTerm) {
        return suppliers;
    }
    return suppliers.filter(supplier =>
        supplier.name.toLowerCase().includes(searchTerm) 
    );
}, [searchTerm, suppliers]); // Залежність: оновлює

const totalItems = filteredSuppliers.length; 


const startIndex = (page - 1) * itemPerPage;
const endIndex = startIndex + itemPerPage;

const visibleSuppliers = filteredSuppliers.slice(startIndex, endIndex);

useEffect(()=>{
    dispatch(fetchSuppliers())
},[dispatch])
console.log("Supplers from Redux:", suppliers)

const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
        setPage(1); 
    };


    return(
    <SupliersWrap>
        <FilterWrap>
           <Filter 
placeholder="User name" 
totalItems={totalItems} 
itemsPerPage={itemPerPage}
currentPage={page}
onPageChange={setPage}
  value={searchTerm} 
    onChange={handleSearchChange}
/>
<AddBtnPlus onClick={handlModalOpen}>Add a new suppliers</AddBtnPlus>
        </FilterWrap>
        <TableWrap>
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
                {visibleSuppliers.map((supplier)=>(  
                    <SupliersRow key={supplier._id}>
                    <SupliersCell>{supplier.name}</SupliersCell>
                    <SupliersCell>{supplier.address}</SupliersCell>
                     <SupliersCell>{supplier.company}</SupliersCell>
                    <SupliersCell>{supplier.date}</SupliersCell>
                     <SupliersCell>{supplier.amount}</SupliersCell>
                    <SupliersCell type={supplier.status}  ><span>{supplier.status}</span></SupliersCell>
                     <SupliersCell>
                        <EditBtn type="button" onClick={() => handleEditOpen(supplier)}>
                        <EditIcon>
                      <use  href={`${sprite}#icon-edit`}  />
                        </EditIcon>
                          Edit
                        </EditBtn>
                        </SupliersCell>
                </SupliersRow>))}
            </SupliersBody>
        </SupliersTable>
        </TableWrap>
<Paginator
totalItems={totalItems}
itemsPerPage={itemPerPage}
currentPage={page}
onPageChange={setPage}
/>
{openModal && (
        <AddNewSuppliers closeModal={hadleModalClose}  />
      )}

{openEditModal && editingSupplier && (
    

    <EditSupplier closeModal={hadleModalClose}  supplier={editingSupplier}/>
)}
    </SupliersWrap>
    

)
}

