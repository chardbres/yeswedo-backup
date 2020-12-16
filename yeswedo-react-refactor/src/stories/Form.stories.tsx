import React from 'react'
import Form from '../components/molecules/Form/Form'

export default {
    title: 'Components/Molecules/Form',
    component: Form
}

export const BasicForm = () => (
    <Form 
        buttonColor='primary'
        buttonLabel='Submit'
        buttonVariant='contained' 
        inputVariant='standard' 
    />
)