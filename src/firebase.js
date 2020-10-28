import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDulR-hpjrP2YCEIGiwY3Hx4oj5DgI5PRs",
    authDomain: "kalorimax1.firebaseapp.com",
    databaseURL: "https://kalorimax1.firebaseio.com",
    projectId: "kalorimax1",
    storageBucket: "kalorimax1.appspot.com",
    messagingSenderId: "44512707918",
    appId: "1:44512707918:web:715507bf183f9ba08fca1f",
    measurementId: "G-DEGLD6SXGQ"
  })

export const auth = app.auth()
export default app