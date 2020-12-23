import React from 'react'
import { shallow } from 'enzyme'

import { DrawerLeft } from './Drawer'

it("renders without crashing", () => {
  shallow(<DrawerLeft />)
});

export{}