import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Colors from "../../../constants/Colors";

const LegsHouse = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.text}> 1- Bridge </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Leg-House/Bridge.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 2- Side Lunge </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Leg-House/SideLunge.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 3- Single Leg Deadlift</Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Leg-House/Single-LegDeadlift.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}>4- Squat </Text>

            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Leg-House/Squat.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 5- Wall Sit </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Leg-House/WallSit.jpg")}
            />
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default LegsHouse;

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
