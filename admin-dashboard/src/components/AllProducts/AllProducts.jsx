
import {BtnWrap,  DeleteBtn,  DeleteIcon,  EditBtn,  EditIcon,  FilterWrap, ProductsBody, ProductsCap, ProductsCell, ProductsHead, ProductsHeadName, ProductsleHeader, ProductsRow, ProductsTable, ProductsWrap, TableWrap } from "./AllProducts.styled";
import { Filter } from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { selectProducts } from "../../redux/product/productsSelector";
import { deleteProduct, fetchProducts } from "../../redux/product/productOperation";
import { Paginator } from "../Paginator/Paginator";
import sprite from '../../assets/sprite-2.svg'
import { AddBtnPlus } from "../common/AddBtnPlus/AddBtnPlus";
import { AddNewProduct } from "../AddNewProduct/AddNewProduct";
import { EditProduct } from "../EditProduct/EditProduct";

export const AllProducts = () => {
  const dispatch=useDispatch();
const products = useSelector(selectProducts);
 const [page, setPage] = useState(1);
 const itemPerPage=5;
 const [searchTerm, setSearchTerm] = useState('');
 const [openModal, setOpenModal]=useState(false)
 const [openEditModal, setOpenEditModal]= useState(false)
 const [editingProduct, setEditingProduct] = useState(null);

 const hadleModalClose = () => {
  setOpenModal(false);
    setOpenEditModal(false);
    setEditingProduct(null);
  };
  const handleModalCloseEsc = (e) => {
    if (e.code === "Escape") {
      hadleModalClose();
    }
  };
  window.addEventListener("keydown", handleModalCloseEsc);


 const filteredSuppliers = useMemo(() => {
     if (!searchTerm) {
         return products;
     }
     return products.filter(supplier =>
         supplier.name.toLowerCase().includes(searchTerm) 

     );
 }, [searchTerm, products]); 

 const totalItems = filteredSuppliers.length; 


const startIndex = (page - 1) * itemPerPage;
const endIndex = startIndex + itemPerPage;

const visibleSuppliers = filteredSuppliers.slice(startIndex, endIndex)

useEffect(()=>{
    dispatch(fetchProducts())
},[dispatch])
console.log("Products from Redux:", products)

const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
        setPage(1); 
    };

const handleModalAddClick=()=>{
 setOpenModal(true);
}
const handleModalEditClick=(productData)=>{
  setEditingProduct(productData);
 setOpenEditModal(true);
}

  return ( 
  
  <ProductsWrap>
        <FilterWrap>
           <Filter 
placeholder="Product Name" 
totalItems={totalItems} 
itemsPerPage={itemPerPage}
currentPage={page}
onPageChange={setPage}
  value={searchTerm} 
    onChange={handleSearchChange}
/>
<AddBtnPlus onClick={handleModalAddClick}>Add a new product</AddBtnPlus>
        </FilterWrap>
        <TableWrap>
        <ProductsTable>
            <ProductsCap>All products</ProductsCap>
            <ProductsleHeader>
            <ProductsRow>
                <ProductsHeadName>Product Info</ProductsHeadName>
                <ProductsHead>Category</ProductsHead>
                 <ProductsHead>Stock</ProductsHead>
                <ProductsHead>Suppliers</ProductsHead>
                 <ProductsHead>Price</ProductsHead>
                 <ProductsHead>Action</ProductsHead>
          
            </ProductsRow>
            </ProductsleHeader>
            <ProductsBody>
                {visibleSuppliers.map((product)=>(  
                    <ProductsRow key={product._id}>
                    <ProductsCell>{product.name}</ProductsCell>
                    <ProductsCell>{product.category}</ProductsCell>
                     <ProductsCell>{product.stock}</ProductsCell>
                    <ProductsCell>{product.suppliers}</ProductsCell>
                     <ProductsCell>{product.price}</ProductsCell>
                    <ProductsCell>
                      <BtnWrap>
                      <EditBtn onClick={() => handleModalEditClick(product)}><EditIcon><use  href={`${sprite}#icon-edit`}/></EditIcon></EditBtn>
                     <DeleteBtn onClick={()=>dispatch(deleteProduct(product._id))}><DeleteIcon><use  href={`${sprite}#icon-trash`}/></DeleteIcon></DeleteBtn>
                     </BtnWrap>
                    </ProductsCell>
                  
                </ProductsRow>))}
            </ProductsBody>
        </ProductsTable>
        </TableWrap>
<Paginator
totalItems={totalItems}
itemsPerPage={itemPerPage}
currentPage={page}
onPageChange={setPage}
/>
{openModal && 
<AddNewProduct closeModal={hadleModalClose} />
}
{openEditModal && editingProduct && ( 
    <EditProduct 
        closeModal={hadleModalClose} 
        product={editingProduct}
    />
)}
    </ProductsWrap>);
}