import React, { useContext } from 'react';
import { GloabalContext } from '../context/GlobalState';
import IncomeEXpensesComp from '../components/IncomeEXpensesComp';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        {/* Apply conditional rendering for column layout */}
        {window.innerWidth >= 320 && window.innerWidth <= 920 ? (
          <Row>
            <Col>
              <IncomeEXpensesComp  type='Total Income' balanceAmount={income} />
            </Col>
            <Col>
              <IncomeEXpensesComp  type='Total expense' balanceAmount={expense}/>
            </Col>
            <Col>
              <IncomeEXpensesComp type='Total expense' balanceAmount={expense}  />
            </Col>
          </Row>
        ) : (
          // Render as rows for other widths
          <>
              <IncomeEXpensesComp color='plus' type='Total Income' balanceAmount={income} />
              <IncomeEXpensesComp color='minus' type='Total expense' balanceAmount={expense}/>
              <IncomeEXpensesComp type='Total expense' balanceAmount={expense}  />
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
