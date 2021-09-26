import React, { useContext } from 'react';
import { GlobalState } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
  }

export const Balance =()=> {
    const { transactions } = useContext(GlobalState);

    const transactionAmount = transactions.map(transaction => transaction.Amount);
    const balance = transactionAmount.reduce((acc , item) => (acc += item), 0);
    
    return(
        <div>
        <h4>Current Balance </h4>
        <h1>{moneyFormatter(balance)}</h1>
        </div>
    )
}