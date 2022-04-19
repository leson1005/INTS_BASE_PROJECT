import immutable from 'immutability-helper'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import actions from 'actions/github'

export const githubState = {
  status: 'idle',
  repositories: [],
}

const githubReducer = {
  github: reducerWithInitialState(githubState)
    .case(actions.fetchRepositories.started, (state) => {
      return immutable(state, {
        status: { $set: 'running' },
        repositories: { $set: [] },
      })
    })
    .case(actions.fetchRepositories.done, (state, action) => {
      return immutable(state, {
        status: { $set: 'idle' },
        repositories: { $set: action.result.repositories },
      })
    })
    .case(actions.fetchRepositories.failed, (state) => {
      return immutable(state, {
        status: { $set: 'idle' },
        repositories: { $set: [] },
      })
    }),
}

export default githubReducer
