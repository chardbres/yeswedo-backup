import React from 'react'
import { withFirebase } from '../../../api/Firebase'
import { compose } from 'recompose'
import { useAuth } from '../../../context/auth'
import MenuItem from '@material-ui/core/MenuItem'

export const SignOut = () => {
    return (
        <SignOutButton />
    )
}

const SignOutBase = props => {
    const { setAuthTokens } = useAuth()

    const logOut = event => {
        props.firebase
            .doSignOut()
            .then(setAuthTokens(''))
    }

    return (
        <MenuItem onClick={logOut}>Logout</MenuItem>
    )
}

const SignOutButton = compose(
    withFirebase
)(SignOutBase)