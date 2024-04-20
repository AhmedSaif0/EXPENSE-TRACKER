import React from 'react'
import { LuArrowDownLeftSquare } from "react-icons/lu";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { BiBarChartSquare } from "react-icons/bi";


import '../App.css'


 const IncomeEXpensesComp = ({type,balanceAmount,color,total}) => {
  return (
<div className="inc-exp-container">
  <div className="d-flex justify-content-center p-2 gap-4" >
    <div className="d-flex align-items-center mr-3  ">
      {  color === 'minus'? <LuArrowUpRightSquare className='p-3 arr-right'/> 
         : color === 'total' ?  <BiBarChartSquare className='p-3 arr-total'/> 
         : <LuArrowDownLeftSquare className='p-3  arr-left  ' />}
    </div>
    <div className="text-left">
      <h4 className='mb-3  fs-5 fw-bold' >{type}</h4>
      <p className={`${color} fw-bold money fs-5`}>${balanceAmount}</p>
    </div>
  </div>
</div>

  )
}

export default IncomeEXpensesComp   