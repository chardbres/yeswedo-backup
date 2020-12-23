import React from 'react'
import { shallow } from 'enzyme'

import { IconInput } from './Input'

it("renders without crashing", () => {
  shallow(<IconInput
      className='test' 
      label='Test' 
      name='Test' 
      placeholder='Test' 
      size='small' 
      type='username' 
      value='Test' 
      onChange='' 
    />)
});

export{}