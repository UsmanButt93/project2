export default (state, action) => {

    switch (action.type) {
        //Creating Case here for DELETING Transaction

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

//Creating Case here for ADDING Transaction

case 'ADD_TRANSACTION':
    return {
        ...state,
        transactions: [action.payload, ...state.transactions]
    }

        default:
            return state;

    }
}