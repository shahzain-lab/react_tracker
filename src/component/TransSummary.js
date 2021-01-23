import React, { useContext } from 'react';
import { GlobalState } from '../context/GlobalState';

export const Summary =()=> {

    const { transactions } = useContext(GlobalState);
     const transactionAmount = transactions.map(transaction => transaction.Amount);

     const income = transactionAmount
     .filter(transaction => transaction > 0)
     .reduce((acc, transaction) => (acc += transaction),0)
     .toFixed(2);

     const expense = Math.abs(transactionAmount
     .filter(transaction => transaction < 0)
     .reduce((acc , transaction) => (acc += transaction),0))
     .toFixed(2);


    return(
        <div className="inc-exp-container">
        <div>
        <i className="fas fa-chart-line fa-2x"></i>
  <p className="money plus">{income}</p>
        </div>
        <div>
        <i className="fas fa-sort-amount-down-alt fa-2x"></i>
  <p className="money minus">{expense}</p>
        </div>
      </div>
    )
}