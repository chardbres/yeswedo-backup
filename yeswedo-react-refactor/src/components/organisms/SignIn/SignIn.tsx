/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { withFirebase } from '../../../api/Firebase'
import { compose } from 'recompose'
import { useAuth } from '../../../context/auth'
import { css } from '@emotion/react'

// Custom component imports
import Logo from '../../../assets/images/yeswedo_logo.png'
import { FullButton, IconInput } from '../../atoms'
// import { error } from 'console'


export const SignIn = () => {
    return (
        <div css={SigninCSS}>
            <img src={Logo} alt='YesWeDo' />
            <SignInForm/>
        </div>
    )
}


export const SignInFormBase = props => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [userState, setUserState] = useState({
        name: '',
        uid: '',
        token: '',
        isLoggedIn: false
    })
    const [error, setError] = useState(false)
    const { setAuthTokens } = useAuth()

    useEffect(() => {
        console.log('render')
        if (userState.isLoggedIn) {
            return () => {
                console.log('unmount')
            }
        }
    }, [userState])

    const onSubmit = event => {
        const email = credentials.email
        const password = credentials.password

        props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(res => {
                if (res) 
                setAuthTokens(res.user.refreshToken)
                setUserState(userState => ({ ...userState, 
                    name: res.user.email,
                    uid: res.user.uid,
                    token: res.user.refreshToken,
                    isLoggedIn: true
                }))
            })
            .catch(error => {setError(true)})

        event.preventDefault()
    }

    const onChange = event => {
        setCredentials(credentials => ({ ...credentials, [event.target.name]: event.target.value }))
    }

    if (userState.isLoggedIn) {
        return (
            <Redirect to='/dashboard' />
        )
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

            {error && <p>{error}</p>}
        </form>
    )
}

const SignInForm = compose(
    withRouter,
    withFirebase
)(SignInFormBase)

// Styling
const SigninCSS = css`
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
    padding: 3rem 1rem;
    width: 100%;

    .button {
        width: 8rem;
    }

    .input {
        width: 100%;
    }
`
