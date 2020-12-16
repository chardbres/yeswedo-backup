import React from 'react'
import { shallow } from 'enzyme'

import CommonButton from './Button'

it("renders without crashing", () => {
  shallow(<CommonButton label='Test Button' />)
});

export{}