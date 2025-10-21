import {CloseBtn, IconClose, Input, InputBlock, ModalContent, ModalOverlay, ModalTitle, SelectWrap, Form,  SelectIcon, SelectHeader, SelectList, SelectItem, DatePickerWrapper } from "./AddNewSuppliers.styled"
import sprite from '../../assets/sprite-2.svg'
import { Field, Formik} from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addSupplier, fetchSuppliers } from "../../redux/supplier/supplierOperation";
import ButtonsModal from "../Modal/ModalBtns";
import { DatePickerModal } from "../Modal/DatePicker";
import { SelectOption } from "../Modal/SelectOption";

const statusOption=["Active", "Deactive"]


const initialValues = {
  name: '',
  address: '',
  company: '',
  date: null, // Поле для DatePicker
  amount: '',
  status: 'Active', // Поле для Select
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Supplier is required"),
  address: Yup.string()
    .min(5, "Too Short!")
    .max(100, "Too Long!")
    .required("Address is required"),
  company: Yup.string().required("Company is required"),
  date: Yup.date().nullable().required("Delivery Date is required"),
  amount: Yup.number()
    .positive("Amount must be positive")
    .required("Amount is required"),
  status: Yup.string().oneOf(statusOption).required("Status is required"),
});

const SupplierStatuses = [ 
  { value: 'Active', label: 'Active' },
  { value: 'Deactive', label: 'Deactive' },
];

export const AddNewSuppliers=({closeModal})=>{
    const dispatch=useDispatch();
    const[selectOpen, setSelectOpen]=useState(false);
    const datePickerRef = useRef(null);

     const overlayClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };


const handleSelectClick=()=>{
    setSelectOpen((prev)=>!prev);}

 const handleCalendarIconClick = () => {
  if (datePickerRef.current && datePickerRef.current.input) {
    datePickerRef.current.input.focus();
  }
};

   // Обробник відправки форми
  const onSubmit = async (values, { setSubmitting }) => {
    const formattedData = {
        ...values,
        // Переписуємо поле 'date' у форматі ISO String:
        date: values.date 
            ? values.date.toISOString() // Викликаємо toISOString() лише якщо це об'єкт дати
            : null,
        amount: Number(values.amount)
    };
    try {
       const resultAction = await dispatch(addSupplier(formattedData));
      if (addSupplier.rejected.match(resultAction)) {
        // Якщо є помилка, вивести її користувачу, не закривати модальне вікно
        const errorMessage = resultAction.payload || "Не вдалося додати постачальника через помилку сервера.";
        console.error("Помилка відправки:", errorMessage);

        // Тут можна додати виведення повідомлення користувачу (наприклад, toast)
        return; // Зупинити виконання функції
      }
      // 2. Оновлення списку постачальників (як у вашому початковому коді)
      await dispatch(fetchSuppliers())
      closeModal();
    } catch (error) {
      console.error("Failed to add supplier:", error);
    } finally {
      setSubmitting(false);
    }
  };
//    
    
    return(
        <ModalOverlay onClick={overlayClick}>
            <ModalContent>
                <CloseBtn onClick={closeModal}>
                    <IconClose><use  href={`${sprite}#icon-cross`}  /></IconClose>
                </CloseBtn>
                <ModalTitle>Add a new suppliers</ModalTitle>
                <Formik
               initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
               >
            {({ values, setFieldValue, handleSubmit, isSubmitting, errors, touched, onChange, setFieldTouched, validateForm, }) => (       
        <Form>
          <InputBlock>
            <Field placeholder="Suppliers Info" as={Input} 
                  name="name" />
                 {errors.name && touched.name ? <div style={{color: 'red'}}>{errors.name}</div> : null} 
            <Field placeholder="Address" as={Input} 
                  name="address" />
                  {errors.address && touched.address ? <div style={{color: 'red'}}>{errors.address}</div> : null}
             <Field placeholder="Company" as={Input} 
                  name="company" />
                  {errors.company && touched.company ? <div style={{color: 'red'}}>{errors.company}</div> : null}

                       <DatePickerModal 
                       selected={values.date}
                      onChange={(date) => setFieldValue('date', date)}
                       placeholder="Delivery date"
                        dateFormat="MMMM dd, yyyy"
                   isCorrect={!errors.date}
                      hasError={errors.date}
                      ref={datePickerRef}
                      onIconClick={handleCalendarIconClick}
                       />
             <Field placeholder="Ammount" as={Input} 
                  name="amount"  type="number" />
                 {errors.amount && touched.amount ? <div style={{color: 'red'}}>{errors.amount}</div> : null}
         {/* <SelectWrap>
                <SelectHeader onClick={handleSelectClick}>
                 {values.status}
                  <SelectIcon
                    $open={selectOpen}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <use href={`${sprite}#icon-Vector`} />
                  </SelectIcon>
                </SelectHeader>

                {selectOpen && (
                  <SelectList>
                    {statusOption.map((item) => (
                      <SelectItem
                        key={item}
                       onClick={() => {
                            setFieldValue('status', item);
                            setSelectOpen(false);
                          }}
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectList>
                )}
        </SelectWrap> */}

        <Field 
    name="status"
    options={SupplierStatuses} 
    placeholder="Status"
    menuHeight={76}
    isCorrect={!errors.status}
    hasError={errors.status}
    component={SelectOption} 
/>
         <ButtonsModal title="Add" cancelAction={closeModal} />
          </InputBlock>
        </Form>
        )}
                </Formik>
            </ModalContent>
            
        </ModalOverlay>
    )
}