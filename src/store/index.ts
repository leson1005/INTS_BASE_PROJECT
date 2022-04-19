import { applyMiddleware, combineReducers, compose, createStore, Middleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import axios from 'axios'

import rootEpic from 'epics'
import rootReducer from 'reducers'

import { createBrowserHistory } from 'history'
import { createReduxHistoryContext } from 'redux-first-history'
import { createLogger } from 'redux-logger'

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    axios: axios.create({}),
  },
})

const middleware: [Middleware] = [epicMiddleware]

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger({ collapsed: true }))
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
})

const reducer = combineReducers({
  router: routerReducer,
  ...rootReducer,
})

middleware.push(routerMiddleware)

const configStore = (initialState = {}) => {
  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleware))(createStore)

  const createdStore = createStoreWithMiddleware(reducer, initialState)

  epicMiddleware.run(rootEpic)

  return {
    store: createdStore,
  }
}

const { store } = configStore()

export const history = createReduxHistory(store)

export { store }
