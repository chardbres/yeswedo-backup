import React from 'react'
import { Meta } from '@storybook/react'

import { BasicInput, IconInput } from '../components/atoms/Input/Input'

export default {
    title: 'Components/Atoms/Input',
} as Meta

export const StandardInput = () => (
    <BasicInput
        variant='standard'
    />
)

export const UsernameInput = () => (
    <IconInput
        label='Username'
        onChange=''
        type='username'
        value=''
    />
)

export const PasswordInput = () => (
    <IconInput
        label='Password'
        onChange=''
        type='password'
        value=''
    />
)