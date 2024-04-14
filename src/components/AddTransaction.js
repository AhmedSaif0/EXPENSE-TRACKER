import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GloabalContext } from '../context/GlobalState';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';


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
       {/* <h3>Add new transaction</h3>
      <form onSubmit={adding}>
        <div className="form-control" onSubmit={adding}>
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount" >Amount <br />
            (negative - expense - positive - income)</label>
          <input type="number"  value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn"   onClick={minus}  type='submit'>Minus </button>
        <button className="btn"  type='submit' >Plus </button>
      </form> */}
  <Card  className='col-md-4 col-xs-12'>
  <Card.Header as="h5">Add Transaction</Card.Header>
      <Form onSubmit={adding} className='p-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={adding}>
        <Form.Label className='fs-4'>Item</Form.Label>
        <Form.Control  type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className='fs-4'>Amount</Form.Label>
        <Form.Control type="number"  value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."/>
      </Form.Group>
      {/* <Button >
        Minus
      </Button>
      <Button  >
        Plus
      </Button>  */}

      <Stack direction="horizontal" gap={2}>
  <Button   variant="danger"  className="btn danger" onClick={minus} type="submit">
   Minus
  </Button>
  <Button className="btn success" variant="success"  type="submit"  id="btnTow">
    Plus
  </Button>
</Stack>

    </Form>
 </Card>
    </>
  )
}

export default AddTransaction
