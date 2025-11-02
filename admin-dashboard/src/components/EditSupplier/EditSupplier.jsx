import {CloseBtn, IconClose, Input, ModalContent, ModalOverlay, ModalTitle, SelectHeader, SelectIcon, SelectItem, SelectList, SelectWrap, InputBlock } from "./EditSupplier.styled"
import sprite from '../../assets/sprite-2.svg'
import { Field, Form, Formik, } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateSupplier } from "../../redux/supplier/supplierOperation";
import ButtonsModal from "../Modal/ModalBtns";
import { DatePickerModal } from "../Modal/DatePicker";
import { SelectOption } from "../Modal/SelectOption";
import toast from "react-hot-toast";


const SupplierStatuses = [ 
  { value: 'Active', label: 'Active' },
  { value: 'Deactive', label: 'Deactive' },
];

const validStatuses = SupplierStatuses.map(s => s.value);

  const supplierValidationSchema = Yup.object().shape({
  name: Yup.string().nullable(),
  address: Yup.string().nullable(),
  company: Yup.string().nullable(),
  date: Yup.date().nullable().notRequired(), 
  amount: Yup.number().positive("Amount must be positive").nullable(),
  status: Yup.string().oneOf(validStatuses, 'Невірний статус').required('Оберіть статус'),
});

export const EditSupplier=({closeModal, supplier})=>{
// const [selectOpen, setSelectOpen]=useState(false)

    const dispatch=useDispatch()
    if(!supplier) return null;

  const safeDate = (dateString) => {
    if (!dateString || String(dateString).trim() === '') {
        return null;
    }
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date;
};

  const initialValues = {
        name: supplier.name || '',
        address: supplier.address || "",
        company: supplier.company || "",
     date: safeDate(supplier.date),
        amount: supplier.amount || "",
        status: supplier.status || 'Active',
    };

  const overlayClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

const onSubmit = async (values, { setSubmitting }) => {
    const updatedData = {
        ...values,
        // Перетворюємо об'єкт Date в ISO рядок для бекенду
        date: values.date 
            ? values.date instanceof Date 
                ? values.date.toISOString() 
                : new Date(values.date).toISOString()
            : null,
        amount: Number(values.amount),
       
    };
    
    // ID має бути _id Mongoose
    const payload = {
        id: supplier._id, 
        updatedData: updatedData
    };
    
    try {
      
      await dispatch(updateSupplier(payload)).unwrap();
      
      toast.success("Постачальника успішно оновлено!");
      closeModal();
      
    } catch (error) {
      toast.error(`Помилка оновлення: ${error.message || "Невідома помилка"}`);
      console.error("Failed to update supplier:", error);
      // чи помилка не є об'єктом, щоб уникнути винятку
      const errorMessage = typeof error === 'object' && error !== null && error.message 
                           ? error.message 
                           : "Помилка сервера. Не вдалося оновити дані.";
      
      console.error("Помилка відправки:", errorMessage); 
      
    } finally {
      setSubmitting(false);
    }
  };



    return(
        <ModalOverlay onClick={overlayClick}>
            <ModalContent>
<CloseBtn onClick={closeModal}>
                    <IconClose><use  href={`${sprite}#icon-cross`}  /></IconClose>
                </CloseBtn>
<ModalTitle>Edit supplier</ModalTitle>
<Formik initialValues={initialValues} validationSchema={supplierValidationSchema} onSubmit={onSubmit}>
    {({values, setFieldValue,  errors, touched,onChange})=>(
        <Form>
            <InputBlock>
    <Field placeholder="Suppliers Info" 
    name="name" 
    type="text"
     as={Input} 
    />
     {errors.name && touched.name ? <div style={{color: 'red'}}>{errors.name}</div> : null} 

      <Field placeholder="Address" 
    name="address" 
    type="text"
      as={Input} 
    />

     {errors.address && touched.address ? <div style={{color: 'red'}}>{errors.address}</div> : null} 

     <Field placeholder="Company" 
    name="company" 
    type="text"
      as={Input} 
    />
     {errors.company && touched.company ? <div style={{color: 'red'}}>{errors.company}</div> : null}     

     <DatePickerModal 
     selected={values.date}
    onChange={(date) => setFieldValue('date', date)}
     placeholder="Delivery date"
      dateFormat="MMMM dd, yyyy"
 isCorrect={!errors.date}
    hasError={errors.date}
     />
      <Field placeholder="Ammount" name="amount"  type="number"   as={Input} />
    {errors.amount && touched.amount ? <div style={{color: 'red'}}>{errors.amount}</div> : null}
    <Field 
             name="status"
             options={SupplierStatuses} 
             placeholder="Status"
             menuHeight={76}
             isCorrect={!errors.status}
             hasError={errors.status}
             component={SelectOption} 
         />

      <ButtonsModal title="Save" cancelAction={closeModal} />
</InputBlock>
   
</Form>
)}

</Formik>

            </ModalContent>
        </ModalOverlay>
    )
}