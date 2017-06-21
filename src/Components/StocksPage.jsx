import React from 'react'
import { observer } from 'mobx-react'
import StockDetails from './StockDetails'
import StockInput from './StockInput'
import StockItem from './StockItem'
import store from '../Stores/StocksStore'

class StocksPage extends React.Component {
  select = id => {
    store.selectStock(id)
  }
  remove = id => {
    store.remove(id)
  }
  handleAdd = symbol => {
    store.append(symbol)
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-3">
          <StockInput onAdd={this.handleAdd} />
          <div className="columns is-multiline">
            {store.stocks.map(stock => (
              <StockItem
                key={stock.id}
                stock={stock}
                selected={store.selected}
                onSelect={this.select}
                onRemove={this.remove}
              />
            ))}
          </div>
        </div>
        <div className="column">
          <StockDetails stock={store.selected} />
        </div>
      </div>
    )
  }
}

export default observer(StocksPage)
