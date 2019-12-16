import expensesReducer from '../../reducers/expenses'
import expensesTestData from '../fixtures/expenses'

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('Should remove an expense with a provided ID', () => {
  const state = expensesReducer(expensesTestData, {
    type: 'REMOVE_EXPENSE',
    id: expensesTestData[1].id
  })
  expect(state).toEqual([expensesTestData[0], expensesTestData[2]])
})

test('should not remove expenses if wrong id is provided', () => {
  const state = expensesReducer(expensesTestData, {
    type: 'REMOVE_EXPENSE',
    id: '14'
  })
  expect(state).toEqual([
    expensesTestData[0],
    expensesTestData[1],
    expensesTestData[2]
  ])
})

test('Should add a new expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'New expense',
      amount: 1299,
      note: '',
      createdAt: 2865411
    }
  }
  const state = expensesReducer(expensesTestData, action)
  expect(state).toEqual([...expensesTestData, action.expense])
})

test('Should edit an expense with a valid ID', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: {
      description: 'Updated expense'
    }
  }
  const state = expensesReducer(expensesTestData, action)
  expect(state[0].description).toBe('Updated expense')
})

test('Should not edit an expense if ID is wrong', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '44',
    updates: {
      description: 'Updating expense with wrong ID'
    }
  }

  const state = expensesReducer(expensesTestData, action)
  expect(state).toEqual(expensesTestData)
})
