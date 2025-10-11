import { AddBtn, BtnWrap, CancelBtn, CloseBtn, IconClose, Input, InputBlock, ModalContent, ModalOverlay, ModalTitle, SelectWrap, Form,  SelectIcon, SelectHeader, SelectList, SelectItem, DatePickerWrapper } from "./AddNewSuppliers.styled"
import sprite from '../../assets/sprite-2.svg'
import { Formik} from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addSupplier, fetchSuppliers } from "../../redux/supplier/supplierOperation";

const statusOption=["Active", "Deactive"]

console.log({
  AddBtn, BtnWrap, CancelBtn, CloseBtn, IconClose, Input, InputBlock, 
  ModalContent, ModalOverlay, ModalTitle, SelectWrap, Form, SelectIcon, 
  SelectHeader, SelectList, SelectItem, DatePickerWrapper
});

const initialValues = {
  supplier: '',
  address: '',
  company: '',
  deliveryDate: null, // Поле для DatePicker
  amount: '',
  status: 'Active', // Поле для Select
};

const validationSchema = Yup.object({
  supplier: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Supplier is required"),
  address: Yup.string()
    .min(5, "Too Short!")
    .max(100, "Too Long!")
    .required("Address is required"),
  company: Yup.string().required("Company is required"),
  deliveryDate: Yup.date().nullable().required("Delivery Date is required"),
  amount: Yup.number()
    .positive("Amount must be positive")
    .required("Amount is required"),
  status: Yup.string().oneOf(statusOption).required("Status is required"),
});



export const AddNewSuppliers=({closeModal})=>{
    const dispatch=useDispatch();
    const[selectOpen, setSelectOpen]=useState(false);
     const [selected, setSelected] = useState("Active");
     const[selectedDate, setSelectedDate]=useState(false);
     const datePickerRef = useRef(null);

     const overlayClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };


const handleSelectClick=()=>{
    setSelectOpen((prev)=>!prev);}

const handleSelectClickitem=(item)=>{
setSelected(item);
setSelectOpen(false)
}

  const handleDateChange = (date) => {
    setSelectedDate(date)
  };
 const handleCalendarIconClick = () => {
  if (datePickerRef.current && datePickerRef.current.input) {
    datePickerRef.current.input.focus();
  }
};

   // Обробник відправки форми
  const onSubmit = async (values, { setSubmitting }) => {
    
    // Форматування дати перед відправкою
    const formattedData = {
        ...values,
        // Перетворюємо дату, якщо вона існує
        deliveryDate: values.deliveryDate 
            ? values.deliveryDate.toISOString() 
            : null,
        amount: Number(values.amount) // Перетворюємо назад у число
    };

    try {
      // 1. Додавання нового постачальника
      await dispatch(addSupplier(formattedData));
      
      // 2. Оновлення списку постачальників (як у вашому початковому коді)
      await dispatch(fetchSuppliers());

      closeModal();
    } catch (error) {
      console.error("Failed to add supplier:", error);
      // Можна додати обробку помилок
    } finally {
      setSubmitting(false);
    }
  };
    
    return(
        <ModalOverlay onClick={overlayClick}>
            <ModalContent>
                <CloseBtn>
                    <IconClose><use  href={`${sprite}#icon-cross`}  /></IconClose>
                </CloseBtn>
                <ModalTitle>Add a new suppliers</ModalTitle>
                <Formik
               initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
               >
            {({ values, setFieldValue, handleSubmit, isSubmitting }) => (       
        <Form>
          <InputBlock>
            <Input placeholder="Suppliers Info" as={Input} 
                  name="supplier" />
            <Input placeholder="Address" as={Input} 
                  name="adress" />
             <Input placeholder="Company" as={Input} 
                  name="company" />

    <DatePickerWrapper>
            <DatePicker
              selected={values.deliveryDate}
             onChange={(date) => setFieldValue('deliveryDate', date)}
              placeholderText="Delivery Date"
              dateFormat="MMMM dd, yyyy"
              className="date-picker-input"
              ref={datePickerRef}
              shouldCloseOnSelect={true}
            />
            <svg
              onClick={handleCalendarIconClick} width={16} height={16}>
                <use href={`${sprite}#icon-calendar`} />
            </svg>
          </DatePickerWrapper>
             <Input placeholder="Ammount" as={Input} 
                  name="amount"  type="number" />
         <SelectWrap>
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
        </SelectWrap>
        <BtnWrap>
            <AddBtn type="submit" >Add</AddBtn>
             <CancelBtn type="button" onClick={closeModal}>Cancel</CancelBtn>
      </BtnWrap>
          </InputBlock>
        </Form>
        )}
                </Formik>
            </ModalContent>
        </ModalOverlay>
    )
}