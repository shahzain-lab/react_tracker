import React, { createContext, useReducer } from 'react';
import  AppReducer  from './AppReducer';

const initialSate={
    transactions:[]
}
export const GlobalContext = createContext(initialSate);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialSate)

    function delTransaction(id) {
        dispatch({
            type: "Delete_Transaction",
            payload: id
        })
    }

    function addTransaction (transaction) {
        dispatch({
            type: "Add_Transaction",
            payload: transaction
        })
    }
    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}