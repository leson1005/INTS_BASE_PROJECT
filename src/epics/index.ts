import { combineEpics } from 'redux-observable'
import { userLogin, userLogout } from './user'
import { fetchRepositories } from './github'
import { fetchAccounts } from './account'

export default combineEpics(userLogin, userLogout, fetchRepositories, fetchAccounts)
