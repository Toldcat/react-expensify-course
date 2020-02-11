import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import visibleExpenses from '../selectors/expenses'

export const ExpenseList = props => (
  <div className='content-container'>
    <div className='list'>
      <div className='show-on-mobile'>Expenses</div>
      <div className='show-on-desktop'>Expense</div>
      <div className='show-on-desktop'>Amount</div>
    </div>
    <div className='list__body'>
      {props.expenses.length === 0 ? (
        <div className='list__item list__item-message'>
          <span>No Expenses Found</span>
        </div>
      ) : (
        props.expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )}
    </div>
  </div>
)

const mapStateToProps = state => {
  return {
    expenses: visibleExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)
