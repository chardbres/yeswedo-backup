/** @jsxImportSource @emotion/react */
import React from 'react'
import { Header, Menu } from '../../components/molecules'
import { Summary } from '../../components/organisms'
import { css } from '@emotion/react'

export const HomePage = () => {

    return (
        <div>
            <Menu />
            <Header title='Dashboard' user='Test User' />
            <div css={canvasCSS} >
                <Summary />
            </div>
        </div>
    )
}

const canvasCSS = css`    
    background-color: #dcdcdc;
    box-sizing: border-box;
    left: 12vw;
    position: fixed;
    top: 7vh;
    width: 88vw;
`
