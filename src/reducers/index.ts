import userReducer from './user'
import githubReducer from './github'

const reducers = {
  ...userReducer,
  ...githubReducer,
}

export default reducers
