import { selectRecentCustomers } from "../../redux/dashboard/dashboardSelector";
import { CustomerImgBlock, RecentTable, RecentWrap,  TableBody, TableCap, TableCount, TableHead, TableHeader, TableHeadName, TableRow, TableTd, TableTdEmail,} from "./RecentCustomers.styled"
import { useSelector } from "react-redux";




export const RecentCustomers = () => {
  const customers = useSelector(selectRecentCustomers);


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
  {customers.map((customer) => (
    <TableRow key={customer._id}>
      <TableTd>
        <CustomerImgBlock>
          {customer.name}
        </CustomerImgBlock>
      </TableTd>
      <TableTdEmail>{customer.email}</TableTdEmail>
      <TableCount>{customer.spent}</TableCount>
    </TableRow>
  ))} 
</TableBody>
</RecentTable>

 </RecentWrap>
  )
}