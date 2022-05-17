import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";

import Colors from "../../../constants/Colors";

const Home = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Image
        style={styles.logo}
        source={require("../../../assets/EFU-Login.png")}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={"E-Mail"}
          placeholderTextColor={"#FFFFFF"}
          textAlign={"center"}
        />
        <TextInput
          style={styles.textInput}
          placeholder={"Password"}
          placeholderTextColor={"#FFFFFF"}
          textAlign={"center"}
        />
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.button, styles.buttonPressed] : styles.button
          }
          onPress={() => navigation.navigate("AppPage")}
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
        onPress={() => navigation.navigate("RegisterPage")}
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
