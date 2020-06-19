import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//starting state fuction , Values are stored here

const intialState = {

    transactions: [
     
    ]

}




// Creating Context 
export const GlobalContext = createContext(intialState);

// Wrapping the things, Providing Component and using Reducer here.

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, intialState);


// Adding action to REMOVE transaction.

   function deleteTransaction(id) {

    dispatch({

        type: 'DELETE_TRANSACTION',
        payload : id
    });
   }
// Adding action to ADD transaction.

function addTransaction(transaction) {

    dispatch({

        type: 'ADD_TRANSACTION',
        payload : transaction
    });
   }

    return (<GlobalContext.Provider value={{

        transactions: state.transactions,
        deleteTransaction,
        addTransaction

    }}>

        {children}
    </GlobalContext.Provider>);
}