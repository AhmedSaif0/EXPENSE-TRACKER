import { createContext, useReducer} from "react";
// import Appreduser from "../context/Appreduser"
import AddTransaction from '../components/AddTransaction'
import Balance from '../components/Balance'
import IncomeExpenses from '../components/IncomeExpenses'
import TransactionList from '../components/TransactionList'
import Header from "../components/Header";


const Appreduser = (state, action) => {
    switch(action.type){
        case 'Delete':
        return {
            ...state, transactions: state.transactions.filter( trans => trans.id !== action.payload ) 
        };
        case 'Add':

        return {
            transactions:[ action.payload , ...state.transactions,  ]
            // ...state, transactions: state.transactions : { id: Date.now(), text: action.payload },
        }
     default:
         return state;
    }
   }

//initial state 
const initialState = {
  transactions : [  
{ id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 3000 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
]
}

// Create contexet 
export const GloabalContext = createContext(initialState)

// provider component
export const Globalprovider = ({Balance}) => {
    const [state, dispatch] = useReducer(Appreduser, initialState)

    const deleteTrans  = (id) => {
        dispatch({ type: "Delete", payload:id });
      };
      const addTrans  = (myPayload) => {
        dispatch({ type: "Add", payload:myPayload });
      };
     

    return<GloabalContext.Provider value={{
        transactions:state.transactions, deleteTrans, addTrans,
        }}>
      <Header/>
      <Balance />
      <IncomeExpenses />
      <TransactionList/>
      <AddTransaction />
    </GloabalContext.Provider>
}