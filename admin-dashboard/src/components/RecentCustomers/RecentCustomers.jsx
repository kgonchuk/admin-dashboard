import { CustomerImgBlock, CustomImg,  RecentTable, RecentWrap,  TableBody, TableCap, TableCount, TableHead, TableHeader, TableHeadName, TableRow, TableTd, TableTdEmail,} from "./RecentCustomers.styled"
import custom1 from '../../assets/images/Image1.jpg';



export const RecentCustomers = () => {
  return (
 <RecentWrap>
  <RecentTable>
<TableCap>Recent Customers</TableCap>
<TableHeader>
          <TableRow>
            <TableHeadName>Name</TableHeadName>
            <TableHead>Email</TableHead>
            <TableHead>Spent</TableHead>
          </TableRow>
        </TableHeader>

<TableBody>
<TableRow>
  <TableTd>
    <CustomerImgBlock>
      <CustomImg src={custom1} alt="custom" />
      Alex BBBB
      </CustomerImgBlock></TableTd>
  <TableTdEmail>alexshatov@gmail.com</TableTdEmail>
  <TableCount>2,890.66</TableCount>
</TableRow> 
<tr>
 <TableTd>
    <CustomerImgBlock>
      <CustomImg src={custom1} alt="custom" />
       Alex BBBB
      </CustomerImgBlock></TableTd>
  <TableTdEmail>alexshaov@gmail.com</TableTdEmail>
  <TableCount>2,890.66</TableCount>
</tr>
<tr>
<TableTd>
    <CustomerImgBlock>
      <CustomImg src={custom1} alt="custom" />
      Alex BBBB
      </CustomerImgBlock></TableTd>
  <TableTdEmail>alexshatov@gmail.com</TableTdEmail>
  <TableCount>2,890.66</TableCount>
</tr> 
</TableBody>
</RecentTable>

 </RecentWrap>
  )
}