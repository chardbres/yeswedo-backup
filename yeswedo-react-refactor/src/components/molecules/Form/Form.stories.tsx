import React from 'react'
import Form from './Form'

export default {
    title: './Form',
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