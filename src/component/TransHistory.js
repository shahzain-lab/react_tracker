import React, { useContext } from 'react';

import {  GlobalContext } from '../context/GlobalState';

import { Transaction } from '../component/Transaction';

export const TransHistory = () => {
    const {transactions} = useContext(GlobalContext)
    console.log(transactions)
    return (
        <div>
        <h3 className="hist">Transaction History</h3>
        <ul className="align">
            <li>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction= {transaction} />
                ))}
            </li>
        </ul>
        </div>
    )
}