import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Colors from "../../../constants/Colors";

const FullbodyGym = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View >
          <View style={styles.exercise}>
            <Text style={styles.text}> 1- Dumbell Lateral Raise </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Fullbody-Gym/DumbellLateralRaise.png")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 2-Dumbell Curl </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Fullbody-Gym/DumbellCurl.png")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 3-Dumbell Fly </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Fullbody-Gym/DumbellFly.png")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}>4- Dumbell Shoulder Press </Text>

            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Fullbody-Gym/DumbellShoulderPress.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 5- Abs </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Fullbody-Gym/abs.png")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 6- Push Down </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Fullbody-Gym/Pushdown.jpg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 7- Reacher Curl </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Fullbody-Gym/reacherCurl.png")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 8- Triceps Extension </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Fullbody-Gym/TricepsExtension.jpg")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FullbodyGym;

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
