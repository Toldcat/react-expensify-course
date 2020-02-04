import React from 'react'
import { shallow } from 'enzyme'
import LoginPage from '../../components/LoginPage'

test('Should correctly render Loginpage', () => {
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})
