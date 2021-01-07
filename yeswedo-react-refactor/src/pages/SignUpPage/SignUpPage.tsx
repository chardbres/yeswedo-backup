/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

import { SignUp } from '../../components/organisms'

export const SignUpPage = () => {
    return (
        <div css={SignupCSS}>
            <SignUp />
        </div>
    )
}

const SignupCSS = css`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
`