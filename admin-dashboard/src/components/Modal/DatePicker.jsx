import { CalendarIcon, DatePickerWrapper, FormInput } from "./DatePicker.styled"
import ReactDatePicker from 'react-datepicker';
import sprite from './../../assets/sprite-2.svg'


export const DatePickerModal=({selected, onChange, placeholder, ref,isCorrect,hasError})=>{

    return( <DatePickerWrapper>
                <ReactDatePicker
    selected={selected} 
    onChange={onChange} 
    placeholderText={placeholder}
    dateFormat="MMMM dd, yyyy"
      className="date-picker-input"
      ref={ref}
      shouldCloseOnSelect={true}
       name="date"
        customInput={
          <FormInput data-is-correct={isCorrect} data-has-error={hasError} />
        }
        toggleCalendarOnIconClick
                />
                <CalendarIcon
                              width={16} height={16}  >
                                <use href={`${sprite}#icon-calendar`} />
                            </CalendarIcon>

              </DatePickerWrapper>)
    
}