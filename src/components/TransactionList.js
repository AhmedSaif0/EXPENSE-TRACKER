import React, { useContext } from 'react'
import { GloabalContext } from '../context/GlobalState'
import Trans from './Trans'

const TransactionList = () => {
  const {transactions} = useContext(GloabalContext)
  return (
    <>
    <h3>History</h3>
      <ul  className="list">
       {
       transactions.map( trans =>(  <Trans key={trans.id} trans={trans}/>))
       }
      </ul>
    </>
  )
}

export default TransactionList
