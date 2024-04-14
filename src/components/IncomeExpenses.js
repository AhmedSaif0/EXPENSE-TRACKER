import React, { useContext } from 'react';
import { GloabalContext } from '../context/GlobalState';
import IncomeEXpensesComp from '../components/IncomeEXpensesComp';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Balance from './Balance';


const IncomeExpenses = () => {
  const { transactions } = useContext(GloabalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <Card  className='mt-5 col-11 col-xs-12' >
      <Card.Header as="h5">Expense Tracker</Card.Header>
      <Card.Body >
        {window.innerWidth >= 320 && window.innerWidth <= 920 ? (
          <Row>
            <Col className='justify-content-sm-start'>
            <IncomeEXpensesComp color='plus' type='Income' balanceAmount={income} />
            </Col>
            <Col className='justify-content-sm-start'>
            <IncomeEXpensesComp color='minus' type='expense' balanceAmount={expense}/>
            </Col>
            <Col className='justify-content-sm-start'>
            <IncomeEXpensesComp color='total'  type='Total ' balanceAmount={<Balance />}/>
            </Col>
          </Row>
        ) : (
          // Render as rows for other widths
          <>
              <IncomeEXpensesComp color='plus' type='Income' balanceAmount={income} />
              <IncomeEXpensesComp color='minus' type='expense' balanceAmount={expense}/>
              <IncomeEXpensesComp color='total'  type='Total ' balanceAmount={<Balance />}/>

          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default IncomeExpenses;


















// import React, { useContext } from 'react';
// import { GloabalContext } from '../context/GlobalState';
// import IncomeEXpensesComp from '../components/IncomeEXpensesComp';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const IncomeExpenses = () => {
//   const { transactions } = useContext(GloabalContext);

//   const amounts = transactions.map(transaction => transaction.amount);
//   const income = amounts
//     .filter(item => item > 0)
//     .reduce((acc, item) => (acc += item), 0)
//     .toFixed(2);

//   const expense = amounts
//     .filter(item => item < 0)
//     .reduce((acc, item) => (acc += item), 0)
//     .toFixed(2);

//   return (
//     <Card>
//       <Card.Header>Quote</Card.Header>
//       <Card.Body>
//         <Row>
//           <Col>
//             <IncomeEXpensesComp expense={expense} income={income} />
//           </Col>
//           <Col>
//             <IncomeEXpensesComp expense={expense} income={income} />
//           </Col>
//           <Col>
//             <IncomeEXpensesComp expense={expense} income={income} />
//           </Col>
//         </Row>
//       </Card.Body>
//     </Card>
//   );
// };

// export default IncomeExpenses;
