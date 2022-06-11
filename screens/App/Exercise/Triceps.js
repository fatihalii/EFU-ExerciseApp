import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

import Colors from "../../../constants/Colors";

import { db, auth } from "../../../db/firebase";
import { updateDoc, doc } from "firebase/firestore";

import { useNavigation } from "@react-navigation/native";


const Triceps = () => {
  const navigation = useNavigation();

  const userId = auth.currentUser.uid;
  const [isPressed, setIsPressed] = useState({
    house: false,
    gym: false,
  });

  const housePressed = () => {
    setIsPressed({ house: true, gym: false });
  };
  const gymPressed = () => {
    setIsPressed({ house: false, gym: true });
  };

  const addExercise = () => {
    try {
      updateDoc(
        doc(db, "userPrograms", userId),
        isPressed.house === true ? { TricepsHouse: true } : { TricepsGym: true }
      );
      alert("Program Successfully Added");
      navigation.goBack();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.headerText}>Choose Programme Place</Text>
      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={() => housePressed()}
          style={
            isPressed.house === true
              ? [styles.placeBox, { borderColor: "#000000", borderWidth: 2 }]
              : styles.placeBox
          }
        >
          <Image
            style={{ height: "70%", width: "70%" }}
            source={require("../../../assets/house.png")}
          />
        </Pressable>
        <Pressable
          style={
            isPressed.gym === true
              ? [
                  styles.placeBox,
                  { borderColor: "#000000", borderWidth: 2, marginRight: "5%" },
                ]
              : [styles.placeBox, { marginRight: "5%" }]
          }
          onPress={() => gymPressed()}
        >
          <Image
            style={{ height: "70%", width: "80%" }}
            source={require("../../../assets/gym.png")}
          />
        </Pressable>
      </View>
      <Text style={styles.programText}> Program Type: Triceps</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          isPressed.gym === false && isPressed.house === false
            ? alert("Please Choose a Programme Place")
            : addExercise()
        }
      >
        <Text style={styles.buttonText}> Add To My Programs </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Triceps;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary200,
  },
  headerText: {
    fontSize: 30,
    color: Colors.secondary100,
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "30%",
    width: "80%",
    marginTop: "15%",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: Colors.secondary200,
  },
  placeBox: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Colors.secondary200,
    flex: 2,
    height: "70%",
    borderRadius: 10,
    marginLeft: "5%",
  },
  placeLogo: {
    width: 100,
    height: 100,
  },
  programText: {
    marginTop: "25%",
    fontSize: 20,
    color: Colors.secondary100,
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "78%",
    height: 45,
    borderRadius: 15,
    backgroundColor: Colors.secondary100,
    marginTop: "15%",
  },
  buttonText: {
    color: Colors.primary100,
    fontSize: 15,
  },
});
