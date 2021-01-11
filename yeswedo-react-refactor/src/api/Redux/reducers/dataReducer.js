const initialState = {}

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case 'ADD_DATA': 
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
