/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

import { SignIn } from '../../components/organisms'

export const SignInPage = () => {

    return (
        <div css={SigninCSS}>
            <SignIn />
        </div>
    )
}

const SigninCSS = css`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
`