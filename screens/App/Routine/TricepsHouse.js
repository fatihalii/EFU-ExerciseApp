import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Colors from "../../../constants/Colors";

const TricepsHouse = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.text}> 1- Body Up </Text>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../../assets/Program-Images/Triceps-House/BodyUp.jpeg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 2- Crab Walk </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Triceps-House/CrabWalk.jpeg")}
            />
          </View>
          
          <View style={styles.exercise}>
            <Text style={styles.text}>3- Hand Stand Walk </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Triceps-House/HandstandWalk.jpeg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 4- Incline Push-Ups </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Triceps-House/InclinePushUps.jpeg")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 5- The Impossible Press-Ups </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Triceps-House/TheImpossiblePress-Up.png")}
            />
          </View>
          <View style={styles.exercise}>
            <Text style={styles.text}> 6- Triceps </Text>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../../assets/Program-Images/Triceps-House/Triceps.jpg")}
            />
          </View>
         
        </View>
      </ScrollView>
    </View>
  );
};

export default TricepsHouse;

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
