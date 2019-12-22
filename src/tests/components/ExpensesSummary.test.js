import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expensesTestData from '../fixtures/expenses'

test('should render Expenses Summary component', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expensesTestData} />)
  expect(wrapper).toMatchSnapshot()
})
