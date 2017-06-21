import React from 'react'
import { observer } from 'mobx-react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import moment from 'moment'

const dateFormat = time => {
  return moment(time).format('DD/MM')
}

const StockChart = ({ stock }) => (
  <LineChart width={400} height={400} data={stock.history.slice()}>
    <Line type="monotone" dataKey="close" stroke="#8884d8" />
    <XAxis dataKey="date" tickFormatter={dateFormat} />
    <YAxis />
  </LineChart>
)

export default observer(StockChart)
