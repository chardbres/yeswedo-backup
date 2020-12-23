import React from 'react'
import { shallow } from 'enzyme'

import { SignInPage } from './SignInPage'

it("renders without crashing", () => {
  shallow(<SignInPage  />)
});

export{}