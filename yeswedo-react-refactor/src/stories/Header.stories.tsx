import React from 'react'
import { Meta } from '@storybook/react'
import { Header } from '../components/molecules'

export default {
    title: 'Components/Molecules/Header',
} as Meta

export const CommonHeader = () => (
    <Header title='Title' user='Test User' />
)