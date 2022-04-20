import immutable from 'immutability-helper'
import {reducerWithInitialState} from 'typescript-fsa-reducers'
import accountActions from 'actions/account'

export const dataState = {
  status: 'idle',
  data: [],
}
const accountReducer = {
  account: reducerWithInitialState(dataState)
    .case(accountActions.fetchDatas.started, (state) => {
      return immutable(state, {
        status: {$set: 'running'},
        data: {$set: []},
      })
    })
    .case(accountActions.fetchDatas.done, (state, action) => {
      console.log('accountReducer.account.case.data:', action.result.data)
      return immutable(state, {
        status: {$set: 'idle'},
        data: {$set: action.result.data},
      })
    })
    .case(accountActions.fetchDatas.failed, (state) => {
      return immutable(state, {
        status: {$set: 'idle'},
        data: {$set: []},
      })
    }),
}
export default accountReducer