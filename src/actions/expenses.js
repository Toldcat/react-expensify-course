import uuid from 'uuid'
import database from '../firebase/firebase'

//Action generators for expenses
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return async dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt }
    const ref = await database.ref('expenses').push(expense)
    dispatch(
      addExpense({
        id: ref.key,
        ...expense
      })
    )
  }
}

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = ({ id } = {}) => {
  return async dispatch => {
    await database.ref(`expenses/${id}`).remove()
    dispatch(removeExpense({ id }))
  }
}

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const startEditExpense = (id, updates) => {
  return async dispatch => {
    await database.ref(`expenses/${id}`).update(updates)
    dispatch(editExpense(id, updates))
  }
}

//SET_EXPENSES - get array from firebase
export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return async dispatch => {
    try {
      const snapshot = await database.ref('expenses').once('value')
      const expenses = []
      snapshot.forEach(childSnapshot => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setExpenses(expenses))
    } catch (e) {
      console.log('Error fetching data', e)
    }
  }
}
