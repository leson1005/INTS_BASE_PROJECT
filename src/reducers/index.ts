import userReducer from './user'
import githubReducer from './github'
import accountReducer from './accounts'

const reducers = {
  ...userReducer,
  ...githubReducer,
  ...accountReducer,
}

export default reducers
