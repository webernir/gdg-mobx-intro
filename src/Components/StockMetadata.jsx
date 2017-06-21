import React from 'react'
import { observer } from 'mobx-react'

const StockMetadata = ({ stock }) => (
  <div>
    <h2 className="title">
      {stock.symbol}
    </h2>
    <h5 className="subtitle">
      {(stock.history.length === 0 || stock.news.length === 0)
        ? <button className="button is-info is-loading" />
        : null}
    </h5>
  </div>
)

export default observer(StockMetadata)
