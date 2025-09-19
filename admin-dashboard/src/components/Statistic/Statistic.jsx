import { StatisticContainer, StatisticIcon, StatisticImg, StatisticImgWrap, StatisticItem, StatisticList, StatisticNumber, StatisticText, StstisticList } from "./Statistic.styled"
import sprite from "../../assets/sprite-2.svg";

export const Statistic = () => {
  return (
    <StatisticContainer>
        <StatisticList>
            <StatisticItem>
                <StatisticImgWrap>
                 <StatisticIcon>
                   <use href={`${sprite}#icon-stat-products`}/>
                 </StatisticIcon>
                 <StatisticText>All products</StatisticText>
                </StatisticImgWrap>
                <StatisticNumber>8,430</StatisticNumber>
            </StatisticItem>
            <StatisticItem>  
               <StatisticImgWrap>
                <StatisticIcon> 
                  <use href={`${sprite}#icon-stat-products`}/>
                  </StatisticIcon> 
                 <StatisticText>All suppliers</StatisticText>
                </StatisticImgWrap>
                   <StatisticNumber>211</StatisticNumber>
            </StatisticItem>
            <StatisticItem>  
              <StatisticImgWrap>
                    <StatisticIcon> 
                  <use href={`${sprite}#icon-stat-users`}/>
                  </StatisticIcon> 
                <StatisticText>All Customers </StatisticText>
                </StatisticImgWrap>
                <StatisticNumber>140</StatisticNumber>
            </StatisticItem>
        </StatisticList>
    </StatisticContainer>
  )
}