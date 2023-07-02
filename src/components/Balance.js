import React, { useContext } from 'react'
import { GloabalContext } from '../context/GlobalState'


const Balance = () => {
  const {transactions} = useContext(GloabalContext);
  const amounts = transactions.map( trans => trans.amount);
  console.log(amounts)
  const  total = amounts.reduce( (acc, item) => (acc += item),0).toFixed(2)

  return (
    <div>
        <h4>Your Balance</h4>
        <h1 >{total}</h1>
    </div>
  )
}

export default Balance
