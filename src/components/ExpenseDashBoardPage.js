import React from 'react'
import ExpenseList from './ExpenseList'
import ExpensesSummary from './ExpensesSummary'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashBoardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)

export default ExpenseDashBoardPage
