import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../components/Wrapper'
import GlobalNav from '../components/GlobalNav'
import {Button} from 'semantic-ui-react'
import accountActions from '../actions/account'
import AccountList from '../components/AccountList'

const Accounts = () => {
  const dispatch = useDispatch()
  const account = useSelector((state: any) => state.account)
  const isLoading = account.status === 'running'
  const data = account.data

  useEffect(() => {
    //Mount
    return () => {
      //Unmount
    }
  }, [])

  return (
    <Wrapper>
      <GlobalNav activeItem="accounts" />
      <Button
        onClick={() => {
          dispatch(accountActions.fetchDatas.started({}))
        }}
        disabled={isLoading}
      >
        Fetch datas
      </Button>
      <AccountList items={data ?? []} total_count={data.length} isLoading={isLoading}/>
    </Wrapper>
  )
}

export default Accounts