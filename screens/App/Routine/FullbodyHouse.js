import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Colors from "../../../constants/Colors";

const FullbodyHouse = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.text}> 1- Crunch </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Fullbody-House/Crunch.png")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 2- Doorway Curl </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Fullbody-House/DoorWayCurl.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 3- Hip Thrust </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Fullbody-House/HipThrust.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}>4- Lying Side Bends </Text>

            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Fullbody-House/LyingSideBends.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 5- Pike Push-up </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Fullbody-House/PikePushUp.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 6- Squat </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Fullbody-House/Squat.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 7- Triceps Dips</Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Fullbody-House/TricepsDips.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 8- Wide Push-Up </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Fullbody-House/WidePushUp.jpg")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FullbodyHouse;

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
