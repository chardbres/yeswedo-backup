import React, { useState } from 'react';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom'
import { PrivateRoute } from './navigations/PrivateRoute'
import { AuthContext } from './context/auth'

// Custom component imports
import { 
  Dashboard, 
  LandingPage,
  SignInPage,
  SignUpPage
} from '../src/pages'

import * as ROUTES from '../src/navigations/Routes'

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#2c3e50'
//     },
//     secondary: {
//       main: '#ffca18'
//     }
//   }
// })


const App = (props) => {
  const existingTokens = localStorage.getItem('tokens')
  const parseTokens = existingTokens !== null ? JSON.parse(existingTokens) : null
  const [authTokens, setAuthTokens] = useState(parseTokens)

  const setTokens = data => {
    localStorage.setItem('tokens', JSON.stringify(data))
    setAuthTokens(data)
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div className="App">
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <PrivateRoute path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
