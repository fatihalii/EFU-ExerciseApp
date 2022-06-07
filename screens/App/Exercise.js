import { View, StyleSheet, ScrollView, Text } from "react-native";
import ExerciseButton from "../../components/ExerciseButton";
import Colors from "../../constants/Colors";


const Exercise = () => {

  const imageInnerText = `FULL
    BODY`;

  return (
    <View style={styles.backgroundContainer}>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.header}>WORKOUT PROGRAMS</Text>
        </View>

        <View style={styles.imageContainer}>
          <ExerciseButton
            Text={imageInnerText}
            Source={require("../../assets/image1.webp")}
            ExercisePage ={"Fullbody"}
          />
          <ExerciseButton
            Text={"ARM"}
            Source={require("../../assets/image2.jpeg")}
            ExercisePage ={"Arm"}
          />
          <ExerciseButton
            Text={"TRICEPS"}
            Source={require("../../assets/image3.webp")}
            ExercisePage ={"Triceps"}
          />
          <ExerciseButton
            Text={"LEGS"}
            Source={require("../../assets/image4.jpeg")}
            ExercisePage ={"Legs"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.primary200,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: Colors.secondary100,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 70,
  },

  imageContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  rotator: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
