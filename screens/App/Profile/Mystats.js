import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Colors from "../../../constants/Colors";

import { db, auth } from "../../../db/firebase";
import { doc, getDoc, updateDoc, onSnapshot } from "firebase/firestore";

const Mystats = () => {
  const user = auth.currentUser;
  const [userInfo, setUserInfo] = useState({
    Name: "",
    BirthOfDate: "",
    Gender: "",
    Height: "",
    Weight: "",
  });

  const getUser = () => {
    getDoc(doc(db, "users", user?.uid))
      .then((response) => {
        const rName = response.get("Name");
        const rBirthOfDate = response.get("BirthOfDate");
        const rGender = response.get("Gender");
        const rHeight = response.get("Height");
        const rWeight = response.get("Weight");
        setUserInfo({
          ...userInfo,
          Name: rName,
          BirthOfDate: rBirthOfDate,
          Gender: rGender,
          Height: rHeight,
          Weight: rWeight,
        });
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.message);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const updateUser = () => {
    const docRef = updateDoc(doc(db, "users", user.uid), userInfo)
      .then((response) => {
        alert("You have successfully updated your stats.")
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.message);
      });
  };

  return (
    <View style={styles.viewContainer}>
      <TextInput
        style={styles.nameInput}
        placeholder={"Full Name: " + userInfo.Name}
        placeholderTextColor={Colors.secondary100}
        textAlign={"center"}
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, Name: text });
        }}
        autoCorrect={false}
      />
      <TextInput
        style={styles.nameInput}
        placeholder={"Birth Of Date: " + userInfo.BirthOfDate}
        placeholderTextColor={Colors.secondary100}
        textAlign={"center"}
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, BirthOfDate: text });
        }}
      />
      <TextInput
        style={styles.nameInput}
        placeholder={"Gender: " + userInfo.Gender}
        placeholderTextColor={Colors.secondary100}
        textAlign={"center"}
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, Gender: text });
        }}
      />
      <TextInput
        style={styles.nameInput}
        placeholder={"Height " + userInfo.Height}
        placeholderTextColor={Colors.secondary100}
        textAlign={"center"}
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, Height: text });
        }}
      />
      <TextInput
        style={styles.nameInput}
        placeholder={"Weight: " + userInfo.Weight}
        placeholderTextColor={Colors.secondary100}
        textAlign={"center"}
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, Weight: text });
        }}
      />

      <TouchableOpacity style={styles.button} onPress={() => updateUser()}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Mystats;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.primary200,
    paddingTop: "40%",
    paddingBottom: "50%",
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
    marginTop: 40,
  },
  buttonText: {
    color: Colors.primary200,
  },
});
