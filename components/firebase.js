import { initializeApp } from "firebase/app";
//import 'firebase/auth';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAC75qsTHieOVIKQttMSp4K2EkLGoLEfcs",
    authDomain: "efu-app-12.firebaseapp.com",
    projectId: "efu-app-12",
    storageBucket: "efu-app-12.appspot.com",
    messagingSenderId: "923078699530",
    appId: "1:923078699530:web:f776464f03b3e960294df3",
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  export {auth};