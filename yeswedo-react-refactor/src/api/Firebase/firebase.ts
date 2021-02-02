import firebase from 'firebase/app'
import * as _ from 'lodash'

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
const databaseRef = firebase.database().ref()
const firestore = firebase.firestore()

export const signIn = (email, password) => 
    authRef.signInWithEmailAndPassword(email, password)

export const signOut = () => authRef.signOut()

export const doGetBillsData = myUID => {
    let finalArr : any[] = []

    firestore.collection('Bill Fanout').where('Client', '==', `${myUID}`).onSnapshot( function (querySnapshot) {
        let billsArr : any[] = []

        querySnapshot.forEach(doc => {
            billsArr.push(doc.data())
        })
        
        finalArr = _.cloneDeep(billsArr)
        
    })

    console.log('Array is: ' + finalArr)
}

        

export default firebase

