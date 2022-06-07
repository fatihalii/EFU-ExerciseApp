import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Colors from "../../../constants/Colors";

const ArmHouse = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.text}> 1- Barbell Curl </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Arm-House/1-Triceps.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 2-Crab Walk </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Arm-House/Crab-Walk.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 3- Forearms Curl </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Arm-House/Forearms.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}>4-Handstand Wall Walk</Text>

            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Arm-House/Handstand.jpg")}            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 5- Incline Push-ups</Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Arm-House/InclinePush-Ups.jpg")}            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 6- The impossible Press-up </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Arm-House/The-impossible-Press-up.jpg")}            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ArmHouse;

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
