import React from 'react'
import { shallow } from 'enzyme'

import { SummaryCard } from './SummaryCard'

it("renders without crashing", () => {
  shallow(<SummaryCard color='red' title='Test' type='Receipt' value={0} />)
})

export{}