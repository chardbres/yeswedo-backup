import React from 'react'
import { shallow } from 'enzyme'

import { BillSources } from './BillSources'
import data from './data.json'

it("renders without crashing", () => {
  shallow(<BillSources data={data} />)
})

export{}