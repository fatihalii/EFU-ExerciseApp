import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { useState } from "react";
import Colors from "../../../constants/Colors";

import { initializeApp } from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { async } from "@firebase/util";


//import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const Register = ({ navigation }) => {

const firebaseConfig = {
  apiKey: "AIzaSyAC75qsTHieOVIKQttMSp4K2EkLGoLEfcs",
  authDomain: "efu-app-12.firebaseapp.com",
  projectId: "efu-app-12",
  storageBucket: "efu-app-12.appspot.com",
  messagingSenderId: "923078699530",
  appId: "1:923078699530:web:f776464f03b3e960294df3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [userCredentials, setUserCredentials] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
  });


  const createUser = () => createUserWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential)=>{
    const user = userCredential.user;
    console.log("Successfull")
  })
  .catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
  })


  return (
    <View style={styles.pageContainer}>
      <Text style={styles.headerText}>Create account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.nameInput}
          placeholder="Full Name"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
        />
        <TextInput
          style={styles.nameInput}
          placeholder="E-mail"
          
          placeholderTextColor={Colors.secondary100}
          onChangeText={eml=>{setUser({...user, email:eml})}}
          textAlign={"center"}
        />
        <TextInput
          style={styles.nameInput}
          placeholder="Password"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
          onChangetext={pw=>{setUser({...user, password:pw})}}
          secureTextEntry={"true"}
        />
        <TextInput
          style={styles.nameInput}
          placeholder="Confirm Password"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
          secureTextEntry={"true"}
        />
        <TextInput
          style={styles.smallInput}
          placeholder="Age"
          keyboardType="number-pad"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
        />
        <TextInput
          style={styles.smallInput}
          placeholder="Height"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
        />
        <TextInput
          style={styles.smallInput}
          placeholder="Weight"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
        />
        <TextInput
          style={styles.smallInput}
          placeholder="Gender"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
        />
      </View>

      <Pressable style={styles.button} onPress={createUser} >
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.primary200,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 35,
    marginTop: 25,
    marginBottom: 25,
  },
  inputContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 50,
  },
  nameInput: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.secondary100,
    color: "#FFFFFF",
    marginVertical: 13,
    marginHorizontal: 5,
  },
  smallInput: {
    width: 145,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.secondary100,
    color: "#FFFFFF",
    marginVertical: 13,
    marginHorizontal: 5,
  },
  button: {
    borderColor: "white",
    backgroundColor: Colors.secondary100,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontSize: 50,
    textAlign: "center",
  },
  buttonText: {
    color: Colors.primary200,
  },
});
