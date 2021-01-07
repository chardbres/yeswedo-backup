/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { withFirebase } from '../../../api/Firebase'
import { compose } from 'recompose'
import { useAuth } from '../../../context/auth'
// import * as ROUTES from '../../../navigations/Routes'
import { css } from '@emotion/react'

// Custom component imports
import Logo from '../../../assets/images/yeswedo_logo.png'
import { FullButton, IconInput } from '../../atoms'

export const SignUp = () => {
    return (
        <div css={SignupCSS}>
            <img src={Logo} alt='YesWeDo' />
            <SignUpForm />
        </div>
    )
}

const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    passwordTwo: ''
}

const SignUpFormBase = props => {
    const [credentials, setCredentials] = useState({ 
        ...INITIAL_STATE 
    })
    const [isSignedUp, setSignedUp] = useState(false)
    const [error, setError] = useState(false)
    const { setAuthTokens } = useAuth()

    const onSubmit = event => {
        const email = credentials.email
        const password = credentials.passwordOne

        props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(res => {
                if (res.status !== 400) {
                    setAuthTokens(res.user.refreshToken)
                    setSignedUp(true)
                } else {
                    setError(true)
                }
                // setCredentials({ ...INITIAL_STATE })
                // props.history.push(ROUTES.DASHBOARD)
            })
            .catch(error => {
                setCredentials({...error, [error]: error})
            })

        event.preventDefault()
    }

    const onChange = event => {
        setCredentials(credentials => ({ ...credentials, [event.target.name]: event.target.value }))
    }

    const isInvalid = (
        credentials.passwordOne !== credentials.passwordTwo || 
        credentials.passwordOne === '' || 
        credentials.email === ''
    )

    if (isSignedUp) {
        return <Redirect to='/dashboard' />
    }

    return (
        <form css={formCSS} onSubmit={onSubmit}>
            <IconInput 
                className='input' 
                name='email' 
                label='Username' 
                placeholder='Email' 
                size='small' 
                type='username' 
                value={credentials.email} 
                onChange={onChange} 
            />
            <IconInput 
                className='input' 
                name='passwordOne' 
                label='Password' 
                placeholder='Password' 
                size='small' 
                type='password' 
                value={credentials.passwordOne} 
                onChange={onChange} 
            />
            <IconInput 
                className='input' 
                name='passwordTwo' 
                label='Repeat Password' 
                placeholder='Repeat Password' 
                size='small' 
                type='password' 
                value={credentials.passwordTwo} 
                onChange={onChange} 
            />
            <FullButton 
                className='button' 
                color='primary' 
                disabled={isInvalid} 
                elevation={false} 
                label='Sign Up' 
                type='submit' 
            />

            {error && <p>{error}</p>}
        </form>
    )
}

const SignUpForm = compose(
    withRouter,
    withFirebase
)(SignUpFormBase)

// Styling
const SignupCSS = css`
    border: 1px solid lightgray;
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
    padding: 2rem 1rem;
    width: 100%;

    .button {
        width: 8rem;
    }

    .input {
        width: 100%;
    }
`
