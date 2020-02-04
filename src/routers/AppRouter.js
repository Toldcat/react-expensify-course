import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import LoginPage from '../components/LoginPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>

        <PrivateRoute path='/dashboard' component={ExpenseDashBoardPage} />

        <PrivateRoute path='/create' component={AddExpensePage} />

        <PrivateRoute path='/edit/:id' component={EditExpensePage} />

        <Route path='/help'>
          <HelpPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  </Router>
)

export default AppRouter
