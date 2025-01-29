import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyDnNyh7tH2Kv5imicEQUqnhl58m8QEcSos",
  authDomain: "react-a2554.firebaseapp.com",
  projectId: "react-a2554",
  storageBucket: "react-a2554.firebasestorage.app",
  messagingSenderId: "219098516984",
  appId: "1:219098516984:web:1e61a46088dea4b8af9a0d",
  measurementId: "G-M9RRF393JJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword }; 