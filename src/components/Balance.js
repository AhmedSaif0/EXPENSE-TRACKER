import React, { useContext } from 'react'
import { GloabalContext } from '../context/GlobalState'


const Balance = () => {
  const {transactions} =useContext(GloabalContext)
  const amounts = transactions.map( trans => trans.amount);
  const  total = amounts.reduce( (acc, item) => (acc += item),0).toFixed(2)

  return (<>{total}</>   

  )
}

export default Balance
