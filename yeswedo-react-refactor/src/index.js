import React from 'react'
import ReactDOM from 'react-dom'
// Redux imports
import { Provider } from 'react-redux'
import store from '../src/api/Redux/store'
import App from './App'
import WebFont from 'webfontloader'
import Firebase, { FirebaseContext } from './api/Firebase'

// Loads the global webfont
WebFont.load({
  google: {
    families: ['Nunito:300,400,700', 'sans-serif' ]
  }
})

ReactDOM.render(
  <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </Provider>,
  document.getElementById('root')
)
