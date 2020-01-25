import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense
} from '../../actions/expenses'
import expensesTestData from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import ReduxThunk from 'redux-thunk'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([ReduxThunk])

test('Should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('Should set up edit expense action object', () => {
  const action = editExpense('abd122', {
    description: 'test',
    note: 'test',
    amount: 2
  })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abd122',
    updates: {
      description: 'test',
      note: 'test',
      amount: 2
    }
  })
})

test('Should set up add expense action object with provided values', () => {
  const action = addExpense(expensesTestData[1])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expensesTestData[1]
  })
})

test('Should add expense to DB and store', () => {
  const store = createMockStore({})
  const expenseData = {
    description: 'New PC',
    amount: 140000,
    note: 'Run fast',
    createdAt: 34223534
  }
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      })
      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
})

test('Should add expense with no values provided to DB and store', () => {
  const store = createMockStore({})
  const expenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      })
      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
})
// test('Should set up add expense action object with no values provided', () => {
//   const action = addExpense()
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   })
// })
