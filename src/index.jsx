import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { useStrict } from 'mobx'
import StocksStore from './Stores/StocksStore'
import App from './App'
import store from './Stores/StocksStore'

useStrict(true)

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
