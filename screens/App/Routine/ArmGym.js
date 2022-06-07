import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Colors from "../../../constants/Colors";

const ArmGym = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.text}> 1- Barbell Curl </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Arm-Gym/Barbell-Curl.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 2-Cable Curl </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Arm-Gym/Cable-Curl.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 3-Concentration Curl </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Arm-Gym/Concentration-Curl.png")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}>4-High Pulley Cable Curl </Text>

            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Arm-Gym/HighPulley.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 5- Hammer Curl </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Arm-Gym/Hammer-Curl.png")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 6-Incline Dumbell Curl </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Arm-Gym/InclineDumbell.jpg")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ArmGym;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: Colors.primary200,
  },
  scrollView: {
    alignItems: "center",
  },
  exerciseContainer: {},
  exercise: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: Colors.secondary100,
  },
  image: {
    width: 150,
    height: 120,
  },
  text: {
    color: Colors.secondary100,
  },
});
