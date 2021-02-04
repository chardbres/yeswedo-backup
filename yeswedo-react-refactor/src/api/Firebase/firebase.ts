import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DB,
    projectId: process.env.REACT_APP_PID,
    storageBucket: process.env.REACT_APP_SB,
    messagingSenderId: process.env.REACT_APP_SID,
    appId: process.env.REACT_APP_APPID
}

firebase.initializeApp(config)

const authRef = firebase.auth()
// const databaseRef = firebase.database().ref()
// const firestore = firebase.firestore()

export const signIn = (email, password) => 
    authRef.signInWithEmailAndPassword(email, password)

export const signOut = () => authRef.signOut()     

export default firebase

