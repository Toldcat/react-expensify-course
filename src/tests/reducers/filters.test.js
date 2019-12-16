import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to date', () => {
  const state = filtersReducer(undefined, { type: 'SET_SORTBY_DATE' })
  expect(state.sortBy).toBe('date')
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SET_SORTBY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set texfilter to provided text', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'test'
  })
  expect(state.text).toBe('test')
})

test('should set start date to date specified', () => {
  const date = moment()
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    date
  })
  expect(state.startDate).toEqual(date)
})

test('should set end date to date specified', () => {
  const date = moment()
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    date
  })
  expect(state.endDate).toEqual(date)
})
