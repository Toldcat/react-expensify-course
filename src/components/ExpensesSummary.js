import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import expensesTotal from '../selectors/expenses-total'
import visibleExpenses from '../selectors/expenses'

export const ExpensesSummary = props => (
  <div className='page-header'>
    <div className='content-container'>
      <h1 className='page-header__title'>
        Viewing <span>{props.expenses.length}</span>{' '}
        {props.expenses.length === 1 ? 'expense' : 'expenses'} totalling{' '}
        <span>£{props.count / 100}</span>
      </h1>
      <div className='page-header__actions'>
        <Link className='button' to='/create'>
          Add Expense
        </Link>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => {
  return {
    expenses: visibleExpenses(state.expenses, state.filters),
    count: expensesTotal(visibleExpenses(state.expenses, state.filters))
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
