import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext);

    const [Description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        const newTransaction = {
        id: new Date().getTime(),
        Description,
        transactionAmount: +transactionAmount
    }

    addTransaction(newTransaction)
    }
    return (
        <div>
            <h3 className="add">Add Transaction</h3>
            <form className="form"onSubmit={onSubmit}>
                <label>Description</label><br />
                <input type="text"
                 value={Description}
                 onChange={(e)=>setDescription(e.target.value)}
                 placeholder="Enter your Desc..."/>
                 <br />
                <label>Amount</label><br />
                <input type="number"
                 value={transactionAmount}
                 onChange={(e)=>setTransactionAmount(e.target.value)}
                 placeholder="Enter your Amount..."/>
                 <br />
                <input type="submit"value="Add Transaction"className="footer"/>
            </form>
        </div>
    )
}
