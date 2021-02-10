// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
// React-Router
import { withRouter, Redirect } from 'react-router-dom'
// Recompose
import { compose } from 'recompose'
// Firebase
import firebase, { signIn } from '../../../api/Firebase/firebase'
// Redux
import allActions from '../../../api/Redux/actions'
import { useDispatch } from 'react-redux'
// @Emotion
import { css } from '@emotion/react'
// Custom components and logos
import Logo from '../../../assets/images/yeswedo_logo.png'
import { FullButton, IconInput } from '../../atoms'
import { useAuth } from '../../../context/auth'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


export const SignIn = () => {
    return (
        <div css={SigninCSS}>
            <img src={Logo} alt='YesWeDo' />
            <SignInForm/>
        </div>
    )
}


export const SignInFormBase = props => {
    const db = firebase.database().ref()
    const firestore = firebase.firestore()
    const dispatch = useDispatch()

    // Sets auth tokens into localStore
    const { setAuthTokens } : any = useAuth()

    // Component state 
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [userState, setUserState] = useState({
        error: '',
        name: '',
        uid: '',
        token: '',
        isLoggedIn: false
    })
    const [isDataAddedToStore, setDataAddedToStore] = useState(false)
   

    useEffect(() => {
        
        const addUserToStore = async () => {
            dispatch(allActions.userActions.addUser(userState))
        }

        const getBills = async (id) => {
            firestore.collection('Bill Fanout').where('Client', '==', `${id}`).onSnapshot( function (querySnapshot) {
                let billsArr : any[] = []
        
                querySnapshot.forEach(doc => {
                    billsArr.push(doc.data())
                })
                
                dispatch(allActions.dataActions.addBillsCount(billsArr.length))
                dispatch(allActions.dataActions.addBillsData(billsArr))
            })
        }

        const getCustomers = async (id) => {
            db.child('Customer Fanout').child(id).on('value', snapshot => {
                const custArr : any[] = []
                const obj = snapshot.val()

                for (let prop in obj) {
                    let innerObj = {}
                    innerObj[prop] = obj[prop]
                    custArr.push(innerObj)
                }

                dispatch(allActions.dataActions.addCustomerCount(custArr.length))
                dispatch(allActions.dataActions.addCustomerData(custArr))
            })
        }

        const getJobs = async (id) => {
            db.child('Jobs Board Fanout').child(id).on('value', snapshot => {
                const jobArr : any[] = []

                snapshot.forEach(doc => {
                    jobArr.push(doc.val())
                })

                dispatch(allActions.dataActions.addJobsCount(jobArr.length))
                dispatch(allActions.dataActions.addJobsData(jobArr))
            })
        }

        if (userState.isLoggedIn) {
            addUserToStore()
            // Gets the bills data
            getBills(userState.uid)
            getCustomers(userState.uid)
            getJobs(userState.uid)
                .then(() => setDataAddedToStore(true))       
        }


    }, [userState.isLoggedIn])

    const onSubmit = event => {
        
        const email = credentials.email
        const password = credentials.password

        const doSignIn = async () => {
            return signIn(email, password)
        }

        doSignIn()
            .then(res => {
                setAuthTokens(res.user?.refreshToken)
                setUserState({...userState,
                    name: res.user?.email!,
                    uid: res.user?.uid!,
                    token: res.user?.refreshToken!,
                    isLoggedIn: true
                })
            })
            .catch(user => setUserState({...user, error: 'Invalid Login'}))
            
        event.preventDefault()
    }

    const onChange = event => {
        setCredentials(credentials => ({ ...credentials, [event.target.name]: event.target.value }))
    }

    if (isDataAddedToStore) {
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

            {userState.error && <p>{userState.error}</p>}
        </form>
    )
}

const SignInForm = compose(
    withRouter
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
