import React from 'react'
import { Table } from 'semantic-ui-react'
import {Account} from '../types/common'
import CenterLoader from 'components/CenterLoader'

const AccountList: React.FC<{
    items: Account[]
    total_count: number
    isLoading: boolean
}> = ({items, total_count, isLoading}) => {
  const totalCountElem = items.length > 0 ? <div>Total Count: {total_count}</div> : <></>
  const table = items.length > 0 ? (
    <>
      <button>Add account</button>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Contact</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.contact}</Table.Cell>
              <Table.Cell>{item.address}</Table.Cell>
              <Table.Cell>
                <button>update</button>
                <button>delete</button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  ) : (<>No data !</>)

  return (
    <>
      {totalCountElem}
      {table}
      <CenterLoader isLoading={isLoading}/>
    </>
  )
}

export default AccountList