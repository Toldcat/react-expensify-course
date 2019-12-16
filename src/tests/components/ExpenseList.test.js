import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList'
import expensesTestData from '../fixtures/expenses'

test('should render expense list with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expensesTestData} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render expense list with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
})
