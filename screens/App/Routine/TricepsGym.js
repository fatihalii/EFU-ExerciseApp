import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Colors from "../../../constants/Colors";

const TricepsGym = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.text}> 1- Arm Lying Triceps </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Triceps-Gym/ArmLyingTriceps.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 2- Bench Dips </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Triceps-Gym/BenchDips.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 3- Cable Overhead Triceps </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Triceps-Gym/CableOverheadTriceps.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}>4- Dip </Text>

            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Triceps-Gym/Dip.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 5- Dumbell Kickback </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Triceps-Gym/DumbellKickback.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 6- Lying Z-Bar Triceps </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Triceps-Gym/LyingZ-BarTriceps.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 7- Push Down</Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Triceps-Gym/PushDown.jpg")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TricepsGym;

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
