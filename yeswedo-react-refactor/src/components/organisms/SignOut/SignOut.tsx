// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import React from 'react'
// Firebase
import { signOut } from '../../../api/Firebase/firebase'
// Material-UI component(s)
import MenuItem from '@material-ui/core/MenuItem'
// Custom components
import { useAuth } from '../../../context/auth'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


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
