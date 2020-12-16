import React from 'react';
import { CommonButton, Input } from './components/atoms';

function App() {
  return (
    <div className="App">
        <CommonButton className='text'color='secondary' variant='contained' label='Test Button'/>
        <CommonButton className='text'color='primary' variant='contained' label='Test Button'/>
        <Input variant='standard'/>
    </div>
  );
}

export default App;
