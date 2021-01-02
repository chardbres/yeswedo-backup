import React from 'react'
import { shallow } from 'enzyme'

import { BillAmount } from './BillAmount'
import data from './data.json'

it("renders without crashing", () => {
  shallow(<BillAmount data={data} />)
})

export{}