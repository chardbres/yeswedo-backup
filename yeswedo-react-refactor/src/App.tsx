import React from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom'

// Custom component imports
import { 
  HomePage, 
  LandingPage,
  SignInPage,
  SignUpPage
} from '../src/pages'

import * as ROUTES from '../src/navigations/Routes'

const App = () => {
  return (
    <Router>
        <div className="App">
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      </div>
    </Router>
  )
}

export default App
