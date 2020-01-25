import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

export const AddExpensePage = props => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        props.onSubmit(expense)
        //redirect after expenses have been added
        props.history.push('/')
      }}
    />
  </div>
)

const mapDispatchToProps = dispatch => ({
  onSubmit: expense => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
