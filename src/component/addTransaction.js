import React, { useState, useContext } from 'react';
import { GlobalState } from '../context/GlobalState';


export const AddTrans =()=> {
   const [Description, setDescription] = useState('');
   const [Amount, setAmount] = useState('');

     const { addTransaction } = useContext(GlobalState);
  
    const onSubmit =(e)=> {
      e.preventDefault();

      const newTransaction={
          id: new Date().getTime(),
          Description,
          Amount: +Amount
      }

      addTransaction(newTransaction)
   }

    return(
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label>Add Description</label>
                <br />
                <input 
                autoComplete='off'
                value={Description}
                id="Description"
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Enter Description"
                required="Required"
                  />
                  </div>
                <div className="form-control">
                <label>Add Amount</label>
                <br />
                <input
                id="Amount"
                 value={Amount}
                 onChange={(e) => setAmount(e.target.value)}
                type="number"
                 placeholder="Add Amount"
                 required="Required"
                />
                </div>
                <button type="submit" className="btn">Add Transaction</button>
            </form>
        </div>
    )
}