/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'
import { withFirebase } from '../../../api/Firebase'

// Custom component imports
import { CommonButton, IconInput } from '../../atoms'
import Logo from '../../../assets/images/yeswedo_logo.png'

const INITIAL_STATE = {
    email: '',
    password: ''
}

export const SignIn = props => {
    const [error, setError] = useState(null)
    const [credentials, setCredentials] = useState({
        ...INITIAL_STATE
    })

    const onSubmit = event => {
        const email = credentials.email
        const password = credentials.password

        props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => setCredentials({ ...INITIAL_STATE }))
            .catch(error => {
                setError({ ...error })
            })
        event.preventDefault()
    }

    const onChange = event => {
        setCredentials(credentials => ({ ...credentials, [event.target.name]: event.target.value }))
    }


    return (
        <div css={SigninCSS}>
            <div className='logo' >
                <img src={Logo} alt='YesWeDo' />
            </div>
            <form className='form' onSubmit={onSubmit}>
                <IconInput name='email' placeholder='Email' label='Username' type='username' onChange={onChange} value={credentials.email}/>
                <IconInput name='password' placeholder='Password' label='Password' type='password' onChange={onChange} value={credentials.password}/>
                <CommonButton color='primary' disabled={false} elevation={false} label='Sign In' type='submit' variant='contained' />
            </form>
        </div>
    )
}

const SigninCSS = css`
    border: 1px solid gray;
    display: flex;
    flex-direction: row;
    height: 50vh;
    width: 40vw;

    .logo {
        height: 100%;

        img {
            height: 100%;
            width: auto;
        }
    }

    .form {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: .5rem;
        width: 100%;

        .button {
            width: 8rem;
        }

        .input {
            width: 100%;
        }
    }
`

