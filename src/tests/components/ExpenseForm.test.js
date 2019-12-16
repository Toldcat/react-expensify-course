import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expensesTestData from '../fixtures/expenses'
import moment from '../__mocks__/moment'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render expenseform with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expensesTestData[1]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set decscription on input change', () => {
  const value = 'New description'
  const wrapper = shallow(<ExpenseForm />)
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value }
    })
  expect(wrapper.state('description')).toBe(value)
})

test('should set not on textarea change', () => {
  const value = 'New note'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
  const value = 12.3
  const wrapper = shallow(<ExpenseForm />)
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    })
  expect(wrapper.state('amount')).toBe(value)
})

test('should set amount if invalid input', () => {
  const value = 12.358
  const wrapper = shallow(<ExpenseForm />)
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(
    <ExpenseForm expense={expensesTestData[1]} onSubmit={onSubmitSpy} />
  )
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expensesTestData[1].description,
    amount: expensesTestData[1].amount,
    note: expensesTestData[1].note,
    createdAt: expensesTestData[1].createdAt
  })
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focused properly on change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({
    focused
  })
  expect(wrapper.state('calendarFocused')).toBe(focused)
})
