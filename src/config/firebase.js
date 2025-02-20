import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC42OmC4tThLDyU_ImcpracURfkARfTSw4',
  authDomain: 'hapanjuuri-26b9e.firebaseapp.com',
  projectId: 'hapanjuuri-26b9e',
  storageBucket: 'hapanjuuri-26b9e.firebasestorage.app',
  messagingSenderId: '111576836108',
  appId: '1:111576836108:web:613efa9b4cde6da1432629',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)