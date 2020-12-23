import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFont from 'webfontloader'
import Firebase, { FirebaseContext } from './api/Firebase'

WebFont.load({
  google: {
    families: ['Nunito:300,400,700', 'sans-serif' ]
  }
})

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
