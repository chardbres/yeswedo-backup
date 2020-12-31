import React from 'react'
import { shallow } from 'enzyme'

import { FullButton, OutlinedButton, TextButton } from './Button'

it("renders without crashing", () => {
  shallow(<FullButton label='Test Button' />)
  shallow(<OutlinedButton label='Test Button' />)
  shallow(<TextButton label='Test Button' />)
})

export{}