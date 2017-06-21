import React, { Component } from "react"
import { observer } from "mobx-react"
import DevTools from "mobx-react-devtools"
import StocksPage from "./Components/StocksPage"

@observer class App extends Component {
  render() {
    return (
      <div className="container">
        <StocksPage />
        <DevTools />
      </div>
    )
  }
}

export default App
