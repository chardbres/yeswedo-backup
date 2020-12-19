import React from 'react'
import { Meta } from '@storybook/react'
import { CommonButton } from '../components/atoms/Button/Button'

export default {
    title: 'Components/Atoms/Button',
} as Meta

export const Primary = () => (
    <CommonButton 
        color='primary'
        label='Primary'
        variant='contained'
    />
)


export const Secondary = () => (
    <CommonButton 
        color='secondary'
        label='Secondary'
        variant='contained'
    />
)

export const PrimaryOutlined = () => (
    <CommonButton 
        color='primary'
        label='Primary'
        variant='outlined'
    />
)

export const SecondaryOutlined = () => (
    <CommonButton 
        color='secondary'
        label='Secondary'
        variant='outlined'
    />
)

export const PrimaryText = () => (
    <CommonButton 
        color='primary'
        label='Primary'
    />
)

export const SecondaryText = () => (
    <CommonButton 
    color='secondary'
    label='Secondary'
    />
)