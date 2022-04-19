import immutable from 'immutability-helper'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import actions from 'actions/user'

export const userState = {
  isAuthenticated: false,
  status: 'idle',
}

const userReducer = {
  user: reducerWithInitialState(userState)
    .case(actions.login.started, (state) => {
      return immutable(state, {
        status: { $set: 'running' },
      })
    })
    .case(actions.login.done, (state) => {
      return immutable(state, {
        status: { $set: 'idle' },
        isAuthenticated: { $set: true },
      })
    })
    .case(actions.login.failed, (state) => {
      return immutable(state, {
        status: { $set: 'running' },
        isAuthenticated: { $set: false },
      })
    })
    .case(actions.logout.started, (state) => {
      return immutable(state, {
        status: { $set: 'running' },
      })
    })
    .case(actions.logout.done, (state) => {
      return immutable(state, {
        status: { $set: 'idle' },
        isAuthenticated: { $set: false },
      })
    })
    .case(actions.logout.failed, (state) => {
      return immutable(state, {
        status: { $set: 'idle' },
        isAuthenticated: { $set: false },
      })
    }),
}

export default userReducer
