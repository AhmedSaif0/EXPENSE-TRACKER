import React, { useContext } from 'react'
import { GloabalContext } from '../context/GlobalState';
import ListGroup from 'react-bootstrap/ListGroup';

const Trans = ({trans}) => {
    const {deleteTrans} = useContext(GloabalContext)

    const singn = trans.amount < 0 ? "-" : '+';
  return (
    <ListGroup.Item  className={trans.amount < 0 ? "minus list-group-item no-border " : 'plus list-group-item no-border'}>
          {trans.text} <span> {singn}${Math.abs(trans.amount)}</span> 
          <button onClick={() => deleteTrans(trans.id)} className="delete-btn">x</button>
        </ListGroup.Item>
  )
}

export default Trans
