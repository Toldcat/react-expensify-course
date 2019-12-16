import React from 'react'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

export const EditExpensePage = props => (
  <div>
    <ExpenseForm
      expense={props.expense}
      onSubmit={expense => {
        //Dispatch edit expense action
        props.dispatch(editExpense(props.expense.id, expense))
        //Redirect to dashboard
        props.history.push('/')
      }}
    />
    <button
      onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }))
        //Redirect to dashboard
        props.history.push('/')
      }}
    >
      Remove
    </button>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: data => dispatch(removeExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
