import React from 'react'
import { shallow } from 'enzyme'
import expensesTestData from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage'

let editExpense, removeExpense, history, wrapper

beforeEach(() => {
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expensesTestData[2]}
    />
  )
})

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expensesTestData[2])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(
    expensesTestData[2].id,
    expensesTestData[2]
  )
})

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: expensesTestData[2].id
  })
})
