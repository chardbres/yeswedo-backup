import React from 'react'
import WebFont from 'webfontloader'
import { Meta } from '@storybook/react'
import { DrawerLeft } from '../components/atoms/Drawer/Drawer'

// WebFont load is required to display correct font
WebFont.load({
    google: {
      families: ['Nunito:300,400,700', 'sans-serif' ]
    }
})

export default {
    title: 'Components/Atoms/Drawer',
} as Meta

export const LeftMenu = () => (
    <DrawerLeft />
) 