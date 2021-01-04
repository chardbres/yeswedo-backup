import React from 'react'
import { MemoryRouter } from 'react-router'
import WebFont from 'webfontloader'
import { Meta, storiesOf } from '@storybook/react'
import { Menu } from '../components/organisms'

// WebFont load is required to display correct font
WebFont.load({
    google: {
      families: ['Nunito:300,400,700', 'sans-serif' ]
    }
})

export default {
    title: 'Components/Organisms/Menu',
} as Meta

storiesOf('Nav', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('Menu', () => {
        return <Menu />
    })