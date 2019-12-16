import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <ExpenseDashBoardPage />
        </Route>

        <Route path='/create' component={AddExpensePage} />

        <Route path='/edit/:id' component={EditExpensePage} />

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
