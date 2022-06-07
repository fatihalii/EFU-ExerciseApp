import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Colors from "../../../constants/Colors";

const LegsGym = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.text}> 1- Hack Squat </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Leg-Gym/HackSquat.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 2- Leg Extension </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Leg-Gym/LegExtension.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 3- Leg Press</Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Leg-Gym/LegPress.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}>4-Lying Leg Curl </Text>

            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Leg-Gym/LyingLegCurl.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 5- Squat </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Leg-Gym/Squat.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 6- Standing Leg Curl </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Leg-Gym/StandingLegCurl.jpg")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LegsGym;

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
