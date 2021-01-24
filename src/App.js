import React, { useState } from 'react';
import StartMessage from './components/StartMessage';
import Result from './components/Result';
import InputRange from 'react-input-range';
import './inputRange.css';

function App() {
  const [amount, setAmount] = useState(500);
  const [months, setMonths] = useState(6);
  const [interestRate, setInterestRate] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [startScreen, setStartScreen] = useState(true);

  const calculateLoan = async () => {
    const api_url = 'https://ftl-frontend-test.herokuapp.com';
    try {
      const req = await fetch(
        `${api_url}/interest?amount=${amount}&numMonths=${months}`
      );
      const res = await req.json();
      setInterestRate(res.interestRate);
      setMonthlyPayment(res.monthlyPayment.amount);
      setStartScreen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div>
        <h2 className="header">Simulador de Prestamos</h2>
      </div>
      <div className="range-slider">
        <span className="label">Monto</span>
        <InputRange
          formatLabel={(value) => `${value}`}
          step={50}
          maxValue={5000}
          minValue={500}
          value={amount}
          onChange={(value) => setAmount(value)}
          onChangeComplete={calculateLoan}
        />
      </div>
      <div className="range-slider">
        <span className="label">Meses</span>
        <InputRange
          step={3}
          maxValue={24}
          minValue={6}
          formatLabel={(value) => `${value}`}
          value={months}
          onChange={(value) => setMonths(value)}
          onChangeComplete={calculateLoan}
        />
      </div>
      {!startScreen ? (
        <Result
          amount={amount}
          months={months}
          interestRate={interestRate}
          monthlyPayment={monthlyPayment}
        />
      ) : (
        <StartMessage />
      )}
    </div>
  );
}

export default App;
