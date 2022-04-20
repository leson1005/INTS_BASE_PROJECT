import { Epic } from 'redux-observable'
import { ofAction } from 'typescript-fsa-redux-observable'
import { from, of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { AnyAction } from 'typescript-fsa'
import { AxiosError, AxiosInstance } from 'axios'
import accountActions from '../actions/account'


export const fetchAccounts: Epic<AnyAction, any, any, { axios: AxiosInstance }> = (action$, $state, { axios }) =>
  action$.pipe(
    ofAction(accountActions.fetchDatas.started),
    mergeMap((param) =>
      from(
        axios.get(
          'https://624ff065e3e5d24b3418d744.mockapi.io/api/v1/products',
        ),
      )
        .pipe(
          map((data) => {
            console.log('param:', param)
            console.log('data:', data)
            return accountActions.fetchDatas.done({
              params: param.payload,
              result: { data: data.data },
            })
          }),
          catchError((error: AxiosError) =>
            of(
              accountActions.fetchDatas.failed({
                params: param.payload,
                error: { error: error.message },
              }),
            ),
          ),
        ),
    ),
  )