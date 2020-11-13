import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBfWLXcMftC5IiOvgUi7MXtHPw_9zCAjSo",
    authDomain: "discord-mern-9a26d.firebaseapp.com",
    databaseURL: "https://discord-mern-9a26d.firebaseio.com",
    projectId: "discord-mern-9a26d",
    storageBucket: "discord-mern-9a26d.appspot.com",
    messagingSenderId: "408455135317",
    appId: "1:408455135317:web:2382bddbab85f1cf6114dc"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db