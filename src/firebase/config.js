import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDieqk4mSM5p9UboIH0-5kWZA4EKDe-7V8",
  authDomain: "my-money-site.firebaseapp.com",
  projectId: "my-money-site",
  storageBucket: "my-money-site.appspot.com",
  messagingSenderId: "81406217984",
  appId: "1:81406217984:web:a169a27bb50548d544ade5"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }