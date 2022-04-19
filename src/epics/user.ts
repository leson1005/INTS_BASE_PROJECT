import { merge, of } from 'rxjs'
import { Epic } from 'redux-observable'
import { ofAction } from 'typescript-fsa-redux-observable'
import { AnyAction } from 'typescript-fsa'
import actions from 'actions/user'
import { map, mergeMap } from 'rxjs/operators'

export const userLogin: Epic<AnyAction, any> = (action$) =>
  action$.pipe(
    ofAction(actions.login.started),
    map((data) => {
      return actions.login.done({
        params: { id: data.payload.id },
        result: { data: data },
      })
    }),
  )

export const userLogout: Epic<AnyAction, any> = (action$) =>
  action$.pipe(
    ofAction(actions.logout.started),
    mergeMap(() => merge(of(actions.logout.done))),
  )
