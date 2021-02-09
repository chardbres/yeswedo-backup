// import app from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/firestore'

// const config = {
//     apiKey: "AIzaSyC0JCDZ0qYnGimDZ60_sNXUS7X4jMoyAoI",
//     authDomain: "tack-9a945.firebaseapp.com",
//     databaseURL: "https://tack-9a945.firebaseio.com",
//     projectId: "tack-9a945",
//     storageBucket: "tack-9a945.appspot.com",
//     messagingSenderId: "211321383257",
//     appId: "1:211321383257:web:8bca5b046ff2ad89b78448"
// }

// class Firebase {
//   constructor(count = 0) {
//     app.initializeApp(config)

//     this.auth = app.auth()
//     this.db = app.database().ref()
//     this.firestore = app.firestore()
//     // Data arrays
//     this.customerData = []
//     this.jobsData = []
//     this.workerData = []
//   }

//   // Auth APIs
//   doCreateUserWithEmailAndPassword = (email, password) =>
//     this.auth.createUserWithEmailAndPassword(email, password)
 
//   doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password)

//   doSignOut = () => this.auth.signOut()

//   doPasswordReset = email => this.auth.sendPasswordResetEmail(email)
 
//   doPasswordUpdate = password =>
//     this.auth.currentUser.updatePassword(password)

//   // Database APIs

//   doGetJobsData = myUID =>
//     this.db.child('Jobs Board Fanout').child(myUID).orderByChild('Job Name').on('value', snapshot => {
//       const obj = snapshot.val()
//       for (let prop in obj) {
//         let innerObj = {}
//         innerObj[prop] = obj[prop]
//         this.jobsData.push(innerObj)
//       }
//     })

//   doGetWorkerData = workerID =>
//     this.db.child('Workers Fanout').child(workerID).once('value', snapshot => {
//       this.workerData.push(snapshot)
//     })

//   }

// }
   
// export default Firebase