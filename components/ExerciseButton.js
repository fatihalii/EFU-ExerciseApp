import {
  View,
  Pressable,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExerciseButton = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.exerciseBox}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.exerciseBox, styles.pressed] : styles.exerciseBox
        }
        onPress = {()=>navigation.navigate(props.ExercisePage)}
      >
        <ImageBackground source={props.Source} style={styles.buttonImage}>
          <Text style={styles.imageText}>{props.Text}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default ExerciseButton;

const styles = StyleSheet.create({
  exerciseBox: {
    width: 320,
    height: 180,
    borderRadius: 20,
    overflow: "hidden",
    margin: 10,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonImage: {
    flex: 1,
  },
  imageText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
    textShadowColor: "white",
    fontSize: 30,
    textAlign: "left",
  },
});
