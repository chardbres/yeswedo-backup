const initialState = { name: '', uid: '', token: '' }

export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER': {
            return {
                ...state,
                user: [
                    ...state.user,
                    {
                        name: action.payload.email,
                        uid: action.payload.uid,
                        token: action.payload.refreshToken
                    }
                ]
            }
        }
        default:
            return state
    }
}