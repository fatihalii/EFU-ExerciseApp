import { initializeApp, getApp, getApps } from "firebase/app";
//import 'firebase/auth';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAC75qsTHieOVIKQttMSp4K2EkLGoLEfcs",
    authDomain: "efu-app-12.firebaseapp.com",
    projectId: "efu-app-12",
    storageBucket: "efu-app-12.appspot.com",
    messagingSenderId: "923078699530",
    appId: "1:923078699530:web:f776464f03b3e960294df3",
  };

  const app = getApps().length === 0 ?  initializeApp(firebaseConfig) : getApp();
  
  
  const auth = getAuth(app);
  const db = getFirestore(app);

  export { auth, db };