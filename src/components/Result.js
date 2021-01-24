import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Result = ({ amount, months, interestRate, monthlyPayment }) => {
  return (
    <Fragment>
      <p className="item">
        Solicitado: <span>$ {amount}</span>
      </p>
      <p className="item">
        Plazo en meses: <span>{months}</span>
      </p>
      <p className="item">
        Tasa de interés: <span>{(interestRate * 100).toFixed(0)}%</span>
      </p>
      <p className="item">
        Cuota Mensual: <span>$ {monthlyPayment}</span>
      </p>
      <p className="item">
        Total a devolver: <span>$ {monthlyPayment * months}</span>
      </p>
    </Fragment>
  );
};

Result.propTypes = {
  amount: PropTypes.number.isRequired,
  months: PropTypes.number.isRequired,
  interestRate: PropTypes.number.isRequired,
  monthlyPayment: PropTypes.number.isRequired,
};

export default Result;
