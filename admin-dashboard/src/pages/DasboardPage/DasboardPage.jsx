import { RecentCustomers } from "../../components/RecentCustomers/RecentCustomers";
import { IncomeExpenses } from "../../components/IncomeExpenses/IncomeExpenses";
import { Statistic } from "../../components/Statistic/Statistic";
import { DashboardWrapper, TableContainer, TableWrapper } from "./DasboardPage.styled";

const DashboardPage = () => {
  return (
    <DashboardWrapper  >
      <Statistic/>
<TableContainer>
  
  <TableWrapper>
      <RecentCustomers/>
  </TableWrapper>

  <TableWrapper>
      <IncomeExpenses/>
      </TableWrapper> 
</TableContainer>
    </DashboardWrapper>
  );
}           
export default DashboardPage;