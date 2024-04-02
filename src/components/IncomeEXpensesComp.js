import React from 'react'
import { LuArrowDownLeftSquare } from "react-icons/lu";
import { LuArrowUpRightSquare } from "react-icons/lu";

import Balance from './Balance';


 const IncomeEXpensesComp = ({type,balanceAmount,color}) => {
  return (
<div className="inc-exp-container">
  <div className="d-flex justify-content-center p-2 gap-3" >
    <div className="d-flex align-items-center mr-3 fs-2 border rounded p-4">
{  color === 'minus'? <LuArrowUpRightSquare /> 
     :   <LuArrowDownLeftSquare />}
    </div>
    <div className="text-left">
      <h4 className='mb-3 money' >{type}</h4>
      <p className={`${color} fw-bold money`}>{balanceAmount}</p>
    </div>
  </div>
</div>

  )
}

export default IncomeEXpensesComp   