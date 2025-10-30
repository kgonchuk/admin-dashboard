import {CloseBtn, IconClose, Input, ModalContent, ModalOverlay, ModalTitle, SelectHeader, SelectIcon, SelectItem, SelectList, SelectWrap, InputBlock } from "./EditSupplier.styled"
import sprite from '../../assets/sprite-2.svg'
import { Field, Form, Formik, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { fetchSuppliers, updateSupplier } from "../../redux/supplier/supplierOperation";
import ButtonsModal from "../Modal/ModalBtns";
import { DatePickerModal } from "../Modal/DatePicker";
import { SelectOption } from "../Modal/SelectOption";


const SupplierStatuses = [ 
  { value: 'Active', label: 'Active' },
  { value: 'Deactive', label: 'Deactive' },
];
  const supplierValidationSchema = Yup.object().shape({
  name: Yup.string(),
  address: Yup.string(),
  company: Yup.string(),
  date: Yup.date(), 
  amount: Yup.number().positive("Amount must be positive"),
  status: Yup.string().oneOf(SupplierStatuses),
});

export const EditSupplier=({closeModal, supplier})=>{
const [selectOpen, setSelectOpen]=useState(false)

    const dispatch=useDispatch()
    if(!supplier) return null;

  const safeDate = (dateString) => {
    // Перевіряємо, чи існує рядок І чи він не порожній після обрізки пробілів
    if (!dateString || String(dateString).trim() === '') {
        return null;
    }
    // Створюємо об'єкт Date
    const date = new Date(dateString);
    // Перевіряємо, чи об'єкт Date є валідним (не "Invalid Date")
    // Якщо валідний, повертаємо Date object, інакше null
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
        date: values.date 
            ? values.date.toISOString() 
            : null,
        amount: Number(values.amount)
    };
    const payload = {
        id: supplier._id, 
        updatedData: updatedData
    };
    try {
      const resultAction = await dispatch(updateSupplier(payload));
     if (updateSupplier.rejected.match(resultAction)) {
        const errorMessage = resultAction.payload || "Не вдалося додати постачальника через помилку сервера.";
        console.error("Помилка відправки:", errorMessage);

        // Тут можна додати виведення повідомлення користувачу (наприклад, toast)
        return; 
      }
     await dispatch(fetchSuppliers());
      closeModal();
    } catch (error) {
      console.error("Failed to add supplier:", error);
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