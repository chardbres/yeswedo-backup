import React from 'react'
import { Meta } from '@storybook/react'
import { 
    FullButton, 
    OutlinedButton,
    TextButton
} from '../components/atoms/Button/Button'

export default {
    title: 'Components/Atoms/Button',
} as Meta

export const Primary = () => (
    <FullButton
        color='primary'
        disabled={false}
        elevation={false}
        label='Primary'
        type='submit'
    />
)

export const Secondary = () => (
    <FullButton
        color='secondary'
        disabled={false}
        elevation={false}
        label='Secondary'
        type='submit'
    />
)

export const OutlinedPrimary = () => (
    <OutlinedButton
        color='primary'
        disabled={false}
        label='Primary'
        type='submit'
    />
)

export const OutlinedSecondary = () => (
    <OutlinedButton
        color='secondary'
        disabled={false}
        label='Secondary'
        type='submit'
    />
)

export const TextPrimary = () => (
    <TextButton
        color='primary' 
        disabled={false}
        label='Primary'
        type='submit'
    />
)

export const textSecondary = () => (
    <TextButton
        color='secondary' 
        disabled={false}
        label='Secondary'
        type='submit'
/>
)