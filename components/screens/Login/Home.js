import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import Colors from "../../../constants/Colors";

import {initializeApp} from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {app, auth} from '../../firebase';

const Home = ({ navigation }) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = navigation();

  onAuthStateChanged(auth, (user) => {
    if(user) {
      const uid = user.uid;
      navigation.navigate('RoutinePage');
    } } );
   const onPressLogin = async () => {

     try {
       const response = 
       await signInWithEmailAndPassword(auth, email, password);
       const user = response.user;
       navigation.navigate('RoutinePage');     
      } catch (error) {
        console.error(error);
        alert(error.message);
      } 
    }
    
  

  return (
    <View style={styles.main}>
      <Image
        style={styles.logo}
        source={require("../../../assets/EFU-Login.png")}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          style={styles.textInput}
          placeholder={"E-Mail"}
          placeholderTextColor={"#FFFFFF"}
          textAlign={"center"}
          autoCapitalize={"none"}
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          style={styles.textInput}
          placeholder={"Password"}
          placeholderTextColor={"#FFFFFF"}
          textAlign={"center"}
          autoCapitalize={"none"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.button, styles.buttonPressed] : styles.button
          }
          onPress={() => onPressLogin()}
        >
          <Text style={styles.buttonText}>LOG IN</Text>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.registerContainer, styles.buttonPressed]
            : styles.registerContainer
        }
        onPress={ () => navigation.navigate('RegisterPage') }
      >
        <Text style={styles.registerText}>Don't have an account?</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.primary100,
  },
  logo: {
    marginBottom: 70,
    width: 220,
    height: 220,
  },
  inputContainer: {
    marginBottom: 170,
    alignItems: "center",
  },
  textInput: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
    marginBottom: 20,
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
    marginTop: 20,
    textAlign: "center",
  },
  buttonText: {
    fontFamily: "Damascus",
    fontSize: 15,
    color: Colors.primary100,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  registerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  registerText: {
    color: "#FFFFFF",
  },
});
