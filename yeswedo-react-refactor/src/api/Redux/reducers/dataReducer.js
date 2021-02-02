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
        default:
            return state
    }
}
