import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase configuration
  apiKey: "AIzaSyDgM9W1xlrXOLYjpiBq_JhcuvH7RLC0uiw",
  authDomain: "mynotcoin-9a9c2.firebaseapp.com",
  projectId: "mynotcoin-9a9c2",
  storageBucket: "mynotcoin-9a9c2.appspot.com",
  messagingSenderId: "654248547777",
  appId: "1:654248547777:web:91822e10853bbcb2800b40"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
