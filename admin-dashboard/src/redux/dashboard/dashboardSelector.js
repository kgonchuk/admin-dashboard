export const selectAllProducts = state => state.dashboard.allProducts;

export const selectAllSuppliers = state => state.dashboard.allSuppliers;
export const selectAllCustomers = state => state.dashboard.allCustomers;
export const selectRecentCustomers = state => state.dashboard.recentCustomers;
export const selectIncomeExpenses = state => state.dashboard.incomeExpenses;
export const selectDashboardLoading = state => state.dashboard.isLoading;
export const selectDashboardError = state => state.dashboard.isError;   
