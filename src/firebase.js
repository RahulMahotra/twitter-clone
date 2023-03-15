import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDpCln5gSIAOgbrbbESWnKybSe35ZMIsPA",
    authDomain: "twitter-clone-6fc06.firebaseapp.com",
    projectId: "twitter-clone-6fc06",
    storageBucket: "twitter-clone-6fc06.appspot.com",
    messagingSenderId: "53021651529",
    appId: "1:53021651529:web:04016a259ba0d654c44598",
    measurementId: "G-V7D3E5ZJNK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;