import React from 'react'
import { shallow } from 'enzyme'

import { HoursByEmployee } from './HoursByEmployee'
import data from './data.json'

it("renders without crashing", () => {
  shallow(<HoursByEmployee data={data} />)
})

export{}