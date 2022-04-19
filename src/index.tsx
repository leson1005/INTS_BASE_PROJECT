import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'

import { history, store } from './store'
import { RootProps } from 'types/common'
import 'semantic-ui-css/semantic.min.css'
import 'react-semantic-toasts/styles/react-semantic-alert.css'

const root = document.getElementById('root')

const render = (Component: React.FC<RootProps>) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component history={history} />
    </Provider>,
    root,
  )
}

render(App)
