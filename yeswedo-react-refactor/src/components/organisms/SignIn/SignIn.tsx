/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { withFirebase } from '../../../api/Firebase'
import { compose } from 'recompose'
import { useAuth } from '../../../context/auth'
import { css } from '@emotion/react'

// Redux imports
import { connect } from 'react-redux'
import { addUser } from '../../../api/Redux/actions'

// Custom component imports
import Logo from '../../../assets/images/yeswedo_logo.png'
import { FullButton, IconInput } from '../../atoms'


export const SignIn = () => {
    return (
        <div css={SigninCSS}>
            <img src={Logo} alt='YesWeDo' />
            <SignInForm/>
        </div>
    )
}


export const SignInFormBase = props => {
    // Sign-in credential state
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    // User state, set on successful login and added to store
    const [userState, setUserState] = useState({
        name: '',
        uid: '',
        token: '',
        isLoggedIn: false
    })
    // Sets auth tokens into localStore
    const { setAuthTokens } = useAuth()
    // Error state
    const [error, setError] = useState('')
    const { addUser } = props

    useEffect(() => {
        if (userState.isLoggedIn) {
           addUser(userState)
        }
    }, [addUser, userState])

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
            .catch(error => {setError('Inavlid login')})

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
                tag='username'
                type='text' 
                onChange={onChange} 
                value={credentials.email}
            />
            <IconInput 
                className='input' 
                name='password' 
                placeholder='Password' 
                label='Password' 
                size='small'
                tag='password' 
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

const mapDispatchToProps = dispatch => {
    return { addUser: user => dispatch(addUser(user)) }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
    connect(null, mapDispatchToProps)
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
