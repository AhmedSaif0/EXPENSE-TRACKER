import React, { useContext } from 'react'
import { GloabalContext } from '../context/GlobalState';

const Trans = ({trans}) => {
    const {deleteTrans} = useContext(GloabalContext)

    const singn = trans.amount < 0 ? "-" : '+';
  return (
    <li  className={trans.amount < 0 ? "minus" : 'plus'}>
          {trans.text} <span> {singn}${Math.abs(trans.amount)}</span> 
          <button onClick={() => deleteTrans(trans.id)} className="delete-btn">x</button>
        </li>
  )
}

export default Trans
