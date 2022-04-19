import { from, of } from 'rxjs'
import { Epic } from 'redux-observable'

import actions from 'actions/github'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { AnyAction } from 'typescript-fsa'
import { AxiosError, AxiosInstance } from 'axios'
import { ofAction } from 'typescript-fsa-redux-observable'

export const fetchRepositories: Epic<AnyAction, any, any, { axios: AxiosInstance }> = (action$, $state, { axios }) =>
  action$.pipe(
    ofAction(actions.fetchRepositories.started),
    mergeMap((param) =>
      from(
        axios.get(
          'https://api.github.com/search/repositories?q=+language:javascript+created:%3E2016-10-01&sort=stars&order=desc',
        ),
      ).pipe(
        map((data) => {
          return actions.fetchRepositories.done({
            params: param.payload,
            result: { repositories: data.data },
          })
        }),
        catchError((error: AxiosError) =>
          of(
            actions.fetchRepositories.failed({
              params: param.payload,
              error: { error: error.message },
            }),
          ),
        ),
      ),
    ),
  )
