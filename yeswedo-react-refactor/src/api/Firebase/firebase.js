import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC0JCDZ0qYnGimDZ60_sNXUS7X4jMoyAoI",
    authDomain: "tack-9a945.firebaseapp.com",
    databaseURL: "https://tack-9a945.firebaseio.com",
    projectId: "tack-9a945",
    storageBucket: "tack-9a945.appspot.com",
    messagingSenderId: "211321383257",
    appId: "1:211321383257:web:8bca5b046ff2ad89b78448"
}

class Firebase {
  constructor() {
    app.initializeApp(config)

    this.auth = app.auth()
    this.firestore = app.firestore()
    this.data = []
  }

  // Auth API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)
 
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password)

  // Database API
  doGetDashboardData = (myUID) => { 
    this.firestore.collection('Bill Fanout').where('Client', '==', `${myUID}`).onSnapshot(snapshot => {
      snapshot.forEach(item => {
        this.data.push(item.data())
      })
    })
  }

  returnData = () => {
    return this.data
  }

}
   
export default Firebase