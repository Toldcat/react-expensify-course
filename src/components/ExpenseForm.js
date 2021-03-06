import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }

  onDescriptionChange = e => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = e => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = e => {
    //check the value only has one decimal point and 2 numbers after it
    const amount = e.target.value
    const regex = /^\d{1,}(\.\d{0,2})?$/
    if (!amount || regex.test(amount)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused
    }))
  }

  onSubmit = e => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      //set error state if no description or amount provided
      this.setState(() => ({ error: 'Please provide description and amount' }))
    } else {
      //Clear error
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && (
          <h3 className='form__error'>{this.state.error}</h3>
        )}
        <input
          className='text-input'
          type='text'
          placeholder='description'
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type='text'
          className='text-input'
          placeholder='amount'
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat='D/MM/YYYY'
        />
        <textarea
          className='textarea'
          placeholder='Add a note for your expense (optional)'
          value={this.state.note}
          onChange={this.onNoteChange}
        ></textarea>
        <div>
          <button className='button'>Add Expense</button>
        </div>
      </form>
    )
  }
}
