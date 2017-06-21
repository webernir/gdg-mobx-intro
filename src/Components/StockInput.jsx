import React, { Component } from 'react'
import { observer } from 'mobx-react'

class StockInput extends Component {
  constructor(props) {
    super(props)
    this.state = { symbol: '' }
  }

  updateSymbol = e => {
    this.setState({ symbol: e.target.value })
  }

  add = e => {
    this.props.onAdd(this.state.symbol)
    this.setState({ symbol: '' })
  }

  render() {
    return (
      <div className="field has-addons">
        <p className="control">
          <input
            className="input"
            type="text"
            id="symbol"
            value={this.state.symbol}
            onChange={this.updateSymbol}
          />
        </p>
        <p className="control">
          <button
            className="button is-primary"
            onClick={this.add}
            disabled={this.state.symbol === ''}
          >
            {" "}
            Add
          </button>
        </p>
      </div>
    )
  }
}

export default observer(StockInput)
