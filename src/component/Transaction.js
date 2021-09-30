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
  
export const Transaction =({transaction})=> {

    const { delTransaction } = useContext(GlobalState);

    const sign = transaction.amount > 0 ? '+' : '-';

    return(
         <li className={transaction.amount < 0 ? 'minus' : 'plus'}>

      {transaction.Description} 
      <span>{sign}{moneyFormatter(transaction.Amount)}</span>
      <i className="fas fa-trash-alt" 
       onClick={() => delTransaction(transaction.id)}>
        </i>
    </li>
    )
}