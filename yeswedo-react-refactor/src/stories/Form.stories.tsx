import React from 'react'
import { Meta } from '@storybook/react'
import Form from '../components/molecules/Form/Form'

export default {
    title: 'Components/Molecules/Form'
} as Meta

export const BasicForm = () => (
    <Form 
        buttonColor='primary'
        buttonLabel='Submit'
        buttonVariant='contained' 
        inputVariant='standard' 
    />
)