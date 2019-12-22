import moment from 'moment'

const expensesTestData = [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 1240,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Food',
    note: '',
    amount: 100,
    createdAt: moment(0)
      .subtract(2, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'Phone',
    note: '',
    amount: 12400,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
]

export default expensesTestData
