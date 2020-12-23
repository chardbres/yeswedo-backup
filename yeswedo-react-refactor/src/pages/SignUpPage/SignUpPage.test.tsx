import React from 'react'
import { shallow } from 'enzyme'

import { SignUpPage } from './SignUpPage'

it("renders without crashing", () => {
  shallow(<SignUpPage  />)
});

export{}