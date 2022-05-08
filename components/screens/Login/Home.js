import { Text, StyleSheet, View, Pressable } from "react-native";
import Colors from "../../../constants/colors";


const Home = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.logo}> EFU</Text>

      <View style={styles.buttonsContainer}>
        <Pressable
           
           style={({ pressed }) =>
             pressed ? [styles.button, styles.buttonPressed] : styles.button
           }
           onPress={()=>navigation.navigate('AppPage')}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.button, styles.buttonPressed] : styles.button
          }
         
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </Pressable>
      </View>
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
  button: {
    borderColor: "white",
    backgroundColor: Colors.secondary100,
    width: 330,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontSize: 50,
    marginBottom: 18,
  },
  buttonText: {
    fontFamily: "Damascus",
    fontSize: 19,
    color: Colors.primary100,
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 53,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  logo: {
    color: Colors.secondary100,
    fontSize: 58,
    marginBottom: 230,
    fontFamily: "Baskerville",
  },
});
