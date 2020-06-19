//this list drived frm transactions list, calling li list here
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';  // using this ternary operator to deal with Minus and Plus values

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus' }> 
                    {transaction.text} <span>{sign}AED{Math.abs (transaction.amount)} </span> 
                    <button className="delete-btn" onClick={() => deleteTransaction(transaction.id) }>x</button>
                </li>
    )
}
