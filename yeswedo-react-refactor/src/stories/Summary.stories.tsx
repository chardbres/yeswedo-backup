import React from 'react'
import { Meta } from '@storybook/react'
import { SummaryCard } from '../components/atoms'

export default {
    title: 'Components/Atoms/Summary',
} as Meta

export const SummaryComponent = () => (
    <SummaryCard color='red' title='Customers' type='Receipt' value={37} />
)