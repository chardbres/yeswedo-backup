/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/react'

import Logo from '../../../assets/images/yeswedo_logo.png'
import { CommonButton, IconInput } from '../../atoms'
import { withFirebase } from '../../../api/Firebase'

const SignUp = () => (
    <div css={SignupCSS}>
        <img src={Logo} alt='YesWeDo' />
        <SignUpForm />
    </div>
)


const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: ''
}

const SignUpFormBase = props => {
    const [credentials, setCredentials] = useState({ ...INITIAL_STATE })

    const onSubmit = event => {
        const { email, passwordOne } = credentials

        props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                setCredentials({ ...INITIAL_STATE })
            })
            .catch(error => setCredentials(credentials => ({ ...credentials, error: error })))

        event.preventDefault()
    }

    const onChange = event => {
        setCredentials(credentials => ({ ...credentials, [event.target.name]: event.target.value }))
    }

    const isInvalid = (
        credentials.passwordOne !== credentials.passwordTwo || credentials.passwordOne === '' || credentials.email === ''
    )

    return (
        <form css={formCSS} onSubmit={onSubmit}>
            <IconInput name='email' label='Username' placeholder='Email' type='username' value={credentials.email} onChange={onChange} />
            <IconInput name='passwordOne' label='Password' placeholder='Password' type='password' value={credentials.passwordOne} onChange={onChange} />
            <IconInput name='passwordTwo' label='Repeat Password' placeholder='Repeat Password' type='password' value={credentials.passwordTwo} onChange={onChange} />
            <CommonButton color='secondary' disabled={isInvalid} elevation={false} label='Sign Up' type='submit' variant='contained' />

            {credentials.error && <p>{credentials.error}</p>}
        </form>
    )
}

const SignUpForm = withFirebase(SignUpFormBase)

export default SignUp

// Styling
const SignupCSS = css`
    border: 1px solid gray;
    display: flex;
    flex-direction: row;
    height: 50vh;
    width: 40vw;

    img {
        height: 100%;

        img {
            height: 100%;
            width: auto;
        }
    }
`

const formCSS = css`
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
`