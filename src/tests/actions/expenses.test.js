import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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
  const expenseData = {
    description: 'Rent',
    amount: 123332,
    createdAt: 10000,
    note: 'Last months rent'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('Should set up add expense action object with no values provided', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})
