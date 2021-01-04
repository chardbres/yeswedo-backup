import React from 'react'
import { shallow } from 'enzyme'

import { Header } from './Header'

it("renders without crashing", () => {
  shallow(<Header title='Test' user='Test User' />)
})

export{}