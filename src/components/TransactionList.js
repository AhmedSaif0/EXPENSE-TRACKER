import React, { useContext } from 'react'
import { GloabalContext } from '../context/GlobalState'
import Trans from './Trans'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const TransactionList = () => {
  const {transactions} = useContext(GloabalContext)
  return (
    <Card className='col-md-6 col-xs-12'>
      <Card.Header as="h5">Transactions List</Card.Header>
      <Card.Body className='p-0' >
        {/* <Card.Title>Special title treatment</Card.Title> */}
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
// import React, { useContext } from 'react'
// import { GloabalContext } from '../context/GlobalState'
// import Trans from './Trans'

// const TransactionList = () => {
//   const {transactions} = useContext(GloabalContext)
//   return (
//     <>
//     <h3>History</h3>
//       <ul  className="list">
//        {
//        transactions.map( trans =>(  <Trans key={trans.id} trans={trans}/>))
//        }
//       </ul>
//     </>
//   )
// }

// export default TransactionList
