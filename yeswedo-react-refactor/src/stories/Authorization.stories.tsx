import React from 'react'
import { MemoryRouter } from 'react-router'
import { Meta, storiesOf } from '@storybook/react'
import { SignUp, SignIn } from '../components/organisms/'

export default {
    title: 'Components/Organisms/Authorization'
} as Meta

storiesOf('Authorization', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('SignUp', () => {
        return <SignUp />
    })
    .add('SignIn', () => {
        return <SignIn />
    })