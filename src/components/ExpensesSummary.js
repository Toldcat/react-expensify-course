import React from 'react'
import { connect } from 'react-redux'
import expensesTotal from '../selectors/expenses-total'
import visibleExpenses from '../selectors/expenses'

export const ExpensesSummary = props => (
  <div>
    <p>
      Showing {props.expenses.length}{' '}
      {props.expenses.length === 1 ? 'expense' : 'expenses'} totalling £
      {props.count / 100}
    </p>
  </div>
)

const mapStateToProps = state => {
  return {
    expenses: visibleExpenses(state.expenses, state.filters),
    count: expensesTotal(visibleExpenses(state.expenses, state.filters))
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
