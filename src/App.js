import React from 'react'
import Header from './components/Header'
import './App.css'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import {Globalprovider } from './context/GlobalState'
import Antdesign from "./components/Appss"


const App = () => {
  
  return (
    <div className='container'>

 <Globalprovider>
  <Antdesign />
     <Header/>
     <Balance />
     <IncomeExpenses />
     <TransactionList/>
     <AddTransaction />
  </Globalprovider>
  </div>

  )
}

export default App
