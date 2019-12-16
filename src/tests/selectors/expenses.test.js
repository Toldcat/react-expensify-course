import moment from 'moment'
import getVisibleExpenses from '../../selectors/expenses'
import expensesTestData from '../fixtures/expenses'

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortyBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpenses(expensesTestData, filters)
  expect(result).toEqual([expensesTestData[2]])
})

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortyBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = getVisibleExpenses(expensesTestData, filters)
  expect(result).toEqual([expensesTestData[0], expensesTestData[2]])
})

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortyBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  }
  const result = getVisibleExpenses(expensesTestData, filters)
  expect(result).toEqual([expensesTestData[0], expensesTestData[1]])
})

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpenses(expensesTestData, filters)
  expect(result).toEqual([
    expensesTestData[2],
    expensesTestData[0],
    expensesTestData[1]
  ])
})

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpenses(expensesTestData, filters)
  expect(result).toEqual([
    expensesTestData[0],
    expensesTestData[2],
    expensesTestData[1]
  ])
})
