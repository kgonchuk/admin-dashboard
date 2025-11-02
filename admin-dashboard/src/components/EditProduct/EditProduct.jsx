import { CloseBtn, IconClose, Input, InputBlock, ModalContent, ModalOverlay, ModalTitle } from "./EditProduct.styled"
import sprite from '../../assets/sprite-2.svg'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { SelectOption } from "../Modal/SelectOption";
import ButtonsModal from "../Modal/ModalBtns";
import { useDispatch } from "react-redux";
import {updateProduct } from "../../redux/product/productOperation";

const categoryStatus=['Medicine', 'Head', 'Hand', 'Dental Care', 'Skin Care', 'Eye Care', 'Vitamins & Supplements', 'Orthopedic Products', 'Baby Care']

const categoryStatusOptions = categoryStatus.map(item => ({
    value: item, 
    label: item
}));

const validationSchema = Yup.object({
  name: Yup.string(),
  category: Yup.string().oneOf(categoryStatus, "Невірне значення категорії").required("Категорія є обов'язковою"),
  stock: Yup.number()
    .typeError("Stock має бути числом") 
    .positive("Залишок має бути додатнім"), 
  suppliers: Yup.string()
    .required("Постачальник є обов'язковим"),
  price: Yup.number()
    .typeError("Ціна має бути числом") // Додано тип помилки для чисел
    .positive("Ціна має бути додатньою")
    .required("Ціна є обов'язковою"),
  
});



export const EditProduct=({closeModal, product})=>{
        const dispatch=useDispatch()

         if(!product) return null;

    
const initialValues = {
  name: product.name || '',
  category: product.category || '',
  stock: product.stock || '',
  suppliers: product.suppliers || '',
  price: product.price || '',
  
};


      const overlayClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
const onSubmit = async (values, { setSubmitting }) => {
    const updatedValues = {
        ...values,
        stock: Number(values.stock),
        price: Number(values.price),
    };

    const payload = {
        productId: product._id, 
        updateData: updatedValues
    };
   
    try {
        await dispatch(updateProduct(payload)).unwrap(); 
        closeModal();
    } catch (error) {
        console.error("Failed to update product:", error);
    } finally {
      setSubmitting(false);
    }
  };

    return(
        <ModalOverlay onClick={overlayClick}>
            <ModalContent>
                <CloseBtn onClick={closeModal}><IconClose><use  href={`${sprite}#icon-cross`}  /></IconClose></CloseBtn>
                <ModalTitle>Edit data</ModalTitle>
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
               <Field 
                name="category"
                options={categoryStatusOptions} 
                placeholder="Status"
                menuHeight={76}
                isCorrect={!errors.status}
                hasError={errors.status}
                component={SelectOption} 
            />
             <Field placeholder="Stock" as={Input} 
                  name="stock" type="number" />
                  {errors.stock && touched.stock ? <div style={{color: 'red'}}>{errors.stock}</div> : null}
             <Field placeholder="Suppliers" as={Input} 
                  name="suppliers"  />
                 {errors.suppliers && touched.suppliers ? <div style={{color: 'red'}}>{errors.suppliers}</div> : null}
                  <Field placeholder="Price" as={Input} 
                  name="price"  type="number" />
                 {errors.price && touched.price ? <div style={{color: 'red'}}>{errors.price}</div> : null}
 
 
         <ButtonsModal title="Save" cancelAction={closeModal} />
          </InputBlock>
        </Form>
        )}
                </Formik>
            </ModalContent>
        </ModalOverlay>
    )
}