import React from 'react'
import { Meta } from '@storybook/react'
import { Header } from '../components/organisms'

export default {
    title: 'Components/Organisms/Header',
} as Meta

export const CommonHeader = () => (
    <Header title='Title' user='Test User' />
)