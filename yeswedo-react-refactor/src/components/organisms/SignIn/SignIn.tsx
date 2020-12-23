/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../../../api/Firebase'
import { compose } from 'recompose'
import * as ROUTES from '../../../navigations/Routes'
import { css } from '@emotion/react'

// Custom component imports
import Logo from '../../../assets/images/yeswedo_logo.png'
import { FullButton, IconInput } from '../../atoms'

export const SignIn = () => (
    <div css={SigninCSS}>
        <img src={Logo} alt='YesWeDo' />
        <SignInForm />
    </div>
)

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
}

export const SignInFormBase = props => {
    const [credentials, setCredentials] = useState({
        ...INITIAL_STATE
    })

    const onSubmit = event => {
        const email = credentials.email
        const password = credentials.password

        props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(user => {
                setCredentials({ ...INITIAL_STATE })
                props.history.push(ROUTES.HOME)
            })
            .catch(error => {
                setCredentials({ ...error, [error]: error })
            })

        event.preventDefault()
    }

    const onChange = event => {
        setCredentials(credentials => ({ ...credentials, [event.target.name]: event.target.value }))
    }

    return (
        <form css={formCSS} onSubmit={onSubmit} >
            <IconInput 
                className='input' 
                name='email' 
                placeholder='Email' 
                label='Username' 
                size='small' 
                type='username' 
                onChange={onChange} 
                value={credentials.email}
            />
            <IconInput 
                className='input' 
                name='password' 
                placeholder='Password' 
                label='Password' 
                size='small' 
                type='password' 
                onChange={onChange} 
                value={credentials.password}
            />
            <FullButton 
                className='button' 
                color='primary' 
                disabled={false} 
                elevation={false} 
                label='Sign In' 
                type='submit' 
            />

            {credentials.error && <p>{credentials.error}</p>}
        </form>
    )
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase)

// Styling
const SigninCSS = css`
    border: 1px solid lightgrey;
    width: 500px;
    display: flex;
    flex-direction: row;
    height: 300px;
    width: 600px;

    img {
        height: 100%;
        width: auto;
    }
`

const formCSS = css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;

    .button {
        width: 8rem;
    }

    .input {
        width: 100%;
    }
`
