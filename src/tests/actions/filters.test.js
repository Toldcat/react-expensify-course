import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter
} from '../../actions/filters'
import moment from 'moment'

test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
})

test('Should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
})

test('Should generate sort by date action object', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SET_SORTBY_DATE'
  })
})

test('Should generate sort by amount action object', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SET_SORTBY_AMOUNT'
  })
})

test('Should generate set text filter action object with text passed in', () => {
  const action = setTextFilter('test')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test'
  })
})

test('Should generate set text filter action object with no args passed in', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})
