import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../Stores/StocksStore'
import StockMetadata from './StockMetadata'
import StockNews from './StockNews'
import StockChart from './StockChart'

const StockDetails = () => {
  let stock = store.selected

  return stock
    ? <section className="section has-text-centered">
        <div className="columns">
          <div className="coulmn">
            <StockMetadata stock={stock} />
            <StockChart stock={stock} />
          </div>
          <div className="column has-text-left">
            <StockNews stock={stock} />
          </div>
        </div>

      </section>
    : <div>Choose a symbol</div>
}

export default observer(StockDetails)
