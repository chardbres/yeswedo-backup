import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/reducer'

const composedEnhancer = composeWithDevTools()

const store = createStore(rootReducer, composedEnhancer)

export default store