import React from 'react'
import { Meta } from '@storybook/react'
import { SignIn } from '../components/organisms/SignIn/SignIn'
import SignUp from '../components/organisms/SignUp/SignUp'

export default {
    title: 'Components/Organisms/Authorization'
} as Meta

export const SignInComponent = () => (
    <SignIn />
)

export const SignUpComponent = () => (
    <SignUp />
)