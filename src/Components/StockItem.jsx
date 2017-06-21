import React from 'react'
import { observer } from 'mobx-react'

const StockItem = ({ stock, onSelect, onRemove, selected }) => {
  const isCurrent = selected && selected.id === stock.id
  const { id } = stock
  return (
    <div className="column" key={id}>
      <span
        onClick={() => onSelect(id)}
        className={'tag ' + (isCurrent ? 'is-success' : 'is-info')}
      >
        {stock.symbol}
        <button onClick={() => onRemove(id)} className="delete is-small" />
      </span>
    </div>
  )
}

export default observer(StockItem)
