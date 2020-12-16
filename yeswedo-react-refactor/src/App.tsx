import React from 'react';
import { CommonButton } from './components/atoms';
import { Form } from './components/molecules';

function App() {
  return (
    <div className="App">
        <CommonButton color='secondary' variant='contained' label='Test Button'/>
        <CommonButton color='primary' variant='contained' label='Test Button'/>
        <Form
          buttonColor='secondary' 
          buttonLabel='Test Button'
          elevation={false}
          inputVariant='standard' 
        />
    </div>
  );
}

export default App;
