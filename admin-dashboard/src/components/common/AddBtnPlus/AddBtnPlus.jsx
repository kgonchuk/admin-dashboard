import { ButtonIcon, ButtonPlus, ButtonWrap } from "./AddBtnPlus.styled"
import sprite from '../../../assets/sprite-2.svg'


export const AddBtnPlus=({children, onClick})=>{
    return(
        <ButtonPlus type="button" onClick={onClick}>
            <ButtonWrap>
                <ButtonIcon><use  href={`${sprite}#icon-plus`} width={12} height={12} /></ButtonIcon>
            </ButtonWrap>
            {children}
        </ButtonPlus>
    )
}