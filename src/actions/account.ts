import { ActionTypes } from '../constants'
import actionCreatorFactory from 'typescript-fsa'
import {Account} from '../types/common'

const ac = actionCreatorFactory()

interface FetAccountParam {}
interface CreateDatasParam {
  abc: Account
}

interface FetAccountResult {
  data: any
}

interface FetAccountError {
  error: string
}

const accountActions = {
  fetchDatas: ac.async<FetAccountParam, FetAccountResult, FetAccountError>(
    ActionTypes.FETCH_ACCOUNTS,
  ),
  createDatas: ac.async<CreateDatasParam, FetAccountResult, FetAccountError>(
    ActionTypes.CREATE_ACCOUNTS,
  )
}

export default accountActions