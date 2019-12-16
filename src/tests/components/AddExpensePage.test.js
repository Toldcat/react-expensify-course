import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expensesTestData from '../fixtures/expenses'

test('should render AddExpense page correctly', () => {
  const onSubmit = jest.fn()
  const history = { push: jest.fn() }
  const wrapper = shallow(
    <AddExpensePage onSubmit={onSubmit} history={history} />
  )
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  const onSubmit = jest.fn()
  const history = { push: jest.fn() }
  const wrapper = shallow(
    <AddExpensePage onSubmit={onSubmit} history={history} />
  )
  wrapper.find('ExpenseForm').prop('onSubmit')(expensesTestData[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(onSubmit).toHaveBeenLastCalledWith(expensesTestData[1])
})
