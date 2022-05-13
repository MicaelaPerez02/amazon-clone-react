import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyBejaWp_Zce8JClM_pzBocsJRjTLB-zdUQ",
        authDomain: "clone-react-407cd.firebaseapp.com",
        projectId: "clone-react-407cd",
        storageBucket: "clone-react-407cd.appspot.com",
        messagingSenderId: "870682699678",
        appId: "1:870682699678:web:5dc8041bd4aacfa20e188f",
        measurementId: "G-LXY8SJ38VD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };