import React from 'react'
import { shallow } from 'enzyme'

import { Summary } from './Summary'

it("renders without crashing", () => {
  shallow(<Summary />)
})

export{}