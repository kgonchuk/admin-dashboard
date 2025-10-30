import { selectIncomeExpenses } from "../../redux/dashboard/dashboardSelector";
import { Caption, Table, TableBody, TableCellAmount, TableCellName, TableCellType, TableContainer, TableHead, TableHeader, TableRow, TableWrapper } from "./IncomeExpenses.styled"
import { useSelector } from "react-redux";

export const IncomeExpenses=()=>{
   const incomeExpenses = useSelector(selectIncomeExpenses);
    return(

    <TableContainer>
      <Table>
        <Caption>Income/Expenses</Caption>
        <TableHead>
          <TableRow>
            <TableHeader>Today</TableHeader>
            <TableHeader></TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
        {incomeExpenses.map(item=>(
              <TableRow key={item._id || item.id}>
                <TableCellType type={item.type} >
                  <span>{item.type}</span>
                </TableCellType>
                <TableCellName>{item.name}</TableCellName>
                <TableCellAmount type={item.type}>
                  {item.type === 'Income' ? '+' : '-'}
                      {item.amount}
                </TableCellAmount>
              </TableRow>
        ))} 
        </TableBody>
          </Table>
    </TableContainer>
  );

    
}