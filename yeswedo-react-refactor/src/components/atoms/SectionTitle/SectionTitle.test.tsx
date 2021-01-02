import React from 'react'
import { shallow } from 'enzyme'

import { SectionTitle } from './SectionTitle'

it("renders without crashing", () => {
  shallow(<SectionTitle title='Test' />)
})

export{}