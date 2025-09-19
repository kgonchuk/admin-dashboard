import { Caption, IncomeCap, IncomeHead, IncomeTable, IncomeTd, IncomeTr, IncomeWrap, StyledTable, StyledTd, StyledTh, StyledThead, StyledTr, StyleThead, Table, TableBody, TableCellAmount, TableCellName, TableCellType, TableContainer, TableHead, TableHeader, TableRow, TableWrapper } from "./IncomeExpenses.styled"

export const IncomeExpenses=()=>{
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
        
            
              <TableRow >
                <TableCellType >
                  <span>Expense</span>
                </TableCellType>
                <TableCellName>Qonto billing</TableCellName>
                <TableCellAmount >
                  -49.88
                </TableCellAmount>
              </TableRow>

               <TableRow >
                <TableCellType >
                  <span>Income</span>
                </TableCellType>
                <TableCellName>Cruip.com Market Ltd 70 Wilson St London</TableCellName>
                <TableCellAmount >
                 +249.88
                </TableCellAmount>
              </TableRow>

              <TableRow >
                <TableCellType >
                  <span>Error</span>
                </TableCellType>
                <TableCellName>App.com Market Ltd 70 Wilson St London</TableCellName>
                <TableCellAmount >
                 +99.99
                </TableCellAmount>
              </TableRow>

               <TableRow >
                <TableCellType >
                  <span>Error</span>
                </TableCellType>
                <TableCellName>App.com Market Ltd 70 Wilson St London</TableCellName>
                <TableCellAmount >
                 +99.99
                </TableCellAmount>
              </TableRow>
     
        
        </TableBody>
          </Table>
    </TableContainer>
  );

    
}