import React from 'react'
import { shallow } from 'enzyme'

import { Billables } from './Billables'

it("renders without crashing", () => {
  shallow(<Billables />)
})

export{}