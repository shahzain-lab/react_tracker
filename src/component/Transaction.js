import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({transaction}) => {
    const { delTransaction } = useContext(GlobalContext)

    const sign = transaction.transactionAmount > 0 ? "+" : "-";
    
     const transactionType = transaction.transactionAmount > 0 ? "plus": "minus";

    const color = transaction.transactionAmount > 0;

    return(
        <li className="sapn">
            <li className={transactionType}>
            {transaction.Description}
        <span className={color ?"income":"expense"}>{sign}${Math.abs(transaction.transactionAmount)}</span>
        <button className="btn"onClick={() => delTransaction(transaction.id)}>X</button>
        </li>
        </li>
    )
}