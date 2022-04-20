import { ActionTypes } from '../constants';
import actionCreatorFactory from 'typescript-fsa';

const ac = actionCreatorFactory();

interface FetAccountParam {}

interface FetAccountResult {
    data: any;
}

interface FetAccountError {
    error: string;
}

const accountActions = {
    fetchDatas: ac.async<FetAccountParam, FetAccountResult, FetAccountError>(
        ActionTypes.FETCH_ACCOUNTS,
    ),
}

export default accountActions;