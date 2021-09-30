import React, {useContext} from 'react';
import { GlobalState } from '../context/GlobalState'; 
import { Transaction } from './Transaction';


export const History =()=> {
    const {transactions} = useContext(GlobalState);

    return(
        <div>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction}/>
                    ))
                }
            </ul>
        </div>
    )
}