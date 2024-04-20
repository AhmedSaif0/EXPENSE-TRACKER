import React, { useContext } from 'react'
import { GloabalContext } from '../context/GlobalState'
import Trans from './Trans'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const TransactionList = () => {
  const {transactions} = useContext(GloabalContext)
  return (
    <Card className='col-md-6 col-xs-12'>
      <Card.Header as="h5">Transactions List</Card.Header>
      <Card.Body className='p-0' >
        <ListGroup className='listgroup no-border '  >
        {
      transactions.map( trans =>(  <Trans key={trans.id} trans={trans}/>))
    }
  </ListGroup>
      </Card.Body>
    </Card>

  )
}

export default TransactionList
