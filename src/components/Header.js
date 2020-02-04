import React from 'react'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../actions/auth'
import { connect } from 'react-redux'

export const Header = props => (
  <header>
    <h1>Expensify</h1>

    <NavLink exact to='/dashboard' activeClassName='selected'>
      Dashboard
    </NavLink>
    <NavLink to='/create' activeClassName='selected'>
      Create New Expense
    </NavLink>
    <button onClick={props.startLogout}>Logout</button>
  </header>
)

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
