import React from 'react'
import Header from './components/Header'
import './App.css'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import {Globalprovider } from './context/GlobalState'


const App = () => {
  
  return (
 <Globalprovider>
     <Header/>
    <div className='container'>
     <Balance />
     <IncomeExpenses />
     <TransactionList/>
     <AddTransaction />
    </div>
  </Globalprovider>
  )
}

export default App
