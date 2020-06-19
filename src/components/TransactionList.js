
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction'; // Transaction.js is file name function name is transaction

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);     //transaction now in array


    return (
        <div>
            <h3>Transactions</h3>
            <ul className="list">
                {transactions.map(transaction => (

                    <Transaction key={transaction.id} transaction={transaction} />
                    //rendering transaction function, to render we need Unique key

                ))}

            </ul>
            </div>
        
    )
}
