import React, { useContext } from 'react'
import { useState } from 'react';

import { GloabalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const { addTrans} =useContext(GloabalContext)

    const [text, setText]= useState ("");
    const [amount, setAmount] =useState (0)

    const adding =(e) =>{
      e.preventDefault()
      const myPayload = { id: new Date(), text, amount: +amount}
      // if( myPayload.amoun)
      addTrans(myPayload)
     
    }

    const minus =(e) =>{
      e.preventDefault()
      const myPayload = { id: new Date(), text, amount: -amount}
      // if( myPayload.amoun)
      addTrans(myPayload)
     
    }


  return (
    <>
       <h3>Add new transaction</h3>
      <form onSubmit={adding}>
        <div className="form-control" onSubmit={adding}>
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount" >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number"  value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn" id="btnTow" onClick={minus}  type='submit'>Minus </button>
        <button className="btn"  type='submit' >Plus </button>
      </form>
    </>
  )
}

export default AddTransaction
