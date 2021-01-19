import { combineReducers } from 'redux'

import dataReducer from './dataReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    dashboardData: dataReducer,
    activeUser: userReducer
})

export default rootReducer
