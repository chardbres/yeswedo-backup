import React from 'react'
import { signOut } from '../../../api/Firebase/firebase'
import { useAuth } from '../../../context/auth'
import MenuItem from '@material-ui/core/MenuItem'

export const SignOut = () => {
    return (
        <SignOutBase />
    )
}

const SignOutBase = props => {
    const { setAuthTokens } : any = useAuth()

    const logOut = event => {
        signOut()
            .then(() => setAuthTokens(''))
    }

    return (
        <MenuItem onClick={logOut}>Logout</MenuItem>
    )
}
