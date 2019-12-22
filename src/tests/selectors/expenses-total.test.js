import expensesTotal from '../../selectors/expenses-total'
import expensesTestData from '../fixtures/expenses'

test('should return 0 if no expenses were passed', () => {
  const result = expensesTotal([])
  expect(result).toEqual(0)
})

test('should correctly return the amount of a single expense', () => {
  const result = expensesTotal([expensesTestData[0]])
  expect(result).toEqual(1240)
})

test('should correctly return the amount of all expenses', () => {
  const result = expensesTotal(expensesTestData)
  expect(result).toEqual(13740)
})
