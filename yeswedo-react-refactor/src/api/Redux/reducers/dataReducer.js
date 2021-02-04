export default function dataReducer (state = {}, action) {
    switch (action.type) {
        case 'ADD_BILLS_COUNT': {
            return {
                ...state,
                billsCount: action.payload
            }
        }
        case 'ADD_BILLS_DATA': {
            return {
                ...state,
                billsData: action.payload
            }
        }
        case 'ADD_CUSTOMER_COUNT': {
            return {
                ...state,
                customerCount: action.payload
            }
        }
        case 'ADD_CUSTOMER_DATA': {
            return {
                ...state,
                customerData: action.payload
            }
        }
        default:
            return state
    }
}
