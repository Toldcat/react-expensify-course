import { shallow } from 'enzyme'
import React from 'react'
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage'

test('Should render Header correctly', () => {
  const wrapper = shallow(<ExpenseDashBoardPage />)
  expect(wrapper).toMatchSnapshot()
})
