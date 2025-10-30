import { CloseBtn, IconClose, Input, InputBlock, ModalContent, ModalOverlay, ModalTitle } from "./AddNewProduct.styled"
import sprite from '../../assets/sprite-2.svg'
import ButtonsModal from "../Modal/ModalBtns"
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addProduct, fetchProducts } from "../../redux/product/productOperation";
import { SelectOption } from "../Modal/SelectOption";

const categoryStatus=['Medicine', 'Head', 'Hand', 'Dental Care', 'Skin Care', 'Eye Care', 'Vitamins & Supplements', 'Orthopedic Products', 'Baby Care']

const categoryStatusOptions = categoryStatus.map(item => ({
    value: item, 
    label: item
}));
const initialValues = {
  name: '',
  category: '',
  stock: '',
  suppliers: '',
  price: '',
  
};

const validationSchema = Yup.object({
  name: Yup.string(),
  category: Yup.string().oneOf(categoryStatus).required("Status is required"),
  stock: Yup.number()
    .positive("Stock must be positive"), 
  suppliers: Yup.string()
    .required("Suppliers is required"),
  price: Yup.number()
    .positive("Price must be positive")
    .required("Price is required"),
  
});

export const AddNewProduct=({closeModal})=>{
    const dispatch=useDispatch()

        const overlayClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

   const onSubmit = async data => {
    await dispatch(addProduct(data));
    await dispatch(fetchProducts());

    closeModal();
  };


    return(
        <ModalOverlay onClick={overlayClick}>
            <ModalContent>
                <ModalTitle>Add a new product</ModalTitle>
                <CloseBtn onClick={closeModal}>
                    <IconClose>
                        <use  href={`${sprite}#icon-cross`}  />
                    </IconClose>
                    </CloseBtn>
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
 
 
         <ButtonsModal title="Add" cancelAction={closeModal} />
          </InputBlock>
        </Form>
        )}
                </Formik>
       
       
            </ModalContent>
        </ModalOverlay>
    )
}