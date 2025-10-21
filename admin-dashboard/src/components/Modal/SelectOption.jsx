
import Select from 'react-select';
import { selectStyles, SelectWrap } from './SelectOption.styled';


export const SelectOption=({field,form,placeholder,options,defaultValue,isCorrect,hasError, onChange})=>{

const selectedOption = options 
        ? options.find(option => option.value === field.value) 
        : null;
    

    return(
        <SelectWrap>
    <Select  
    {...field} // Передаємо name, value, onBlur
            placeholder={placeholder}  
            options={options}
            value={selectedOption} // ✅ Використовуємо знайдений об'єкт
            onChange={option => form.setFieldValue(field.name, option ? option.value : '')} // ✅ Оновлення Formik
            onBlur={() => form.setFieldTouched(field.name, true)}
            className='select-option'
            styles={{
        ...selectStyles,
        control: (baseStyles, state) => ({
          ...selectStyles.control(baseStyles, state),
        //   border: `1px solid ${getBorderColorByValidationResult(
        //     theme,
        //     isCorrect,
        //     hasError
        //   )}`
        }),
        menu: (baseStyles, state) => ({
          ...selectStyles.menu(baseStyles, state),

        })
      }}


      defaultValue={defaultValue}

      isCorrect={isCorrect}
      hasError={hasError}/>
      </SelectWrap>
      )
                    
}