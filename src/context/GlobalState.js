import React, { createContext,useReducer } from 'react';
import AppReducer from './AppReducer';

const userState = {
    transactions:[] 
}

export const GlobalState = createContext(userState);

export const GlobalProvider =({children})=>{
    const [state, dispatch] = useReducer(AppReducer,userState);
   
    function delTransaction (id) {
     dispatch({
         type: 'DELETE_TRANSACTION',
         payload: id
     })  
    };
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return(
        <GlobalState.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
          {children}
        </GlobalState.Provider>
    )
} 
