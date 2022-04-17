import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";

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
          <View style={styles.rotator}>
            <View style={styles.exerciseBox}>
              <ImageBackground
                source={require("../assets/image1.webp")}
                style={styles.buttonImage}
              >
                <Text style={styles.imageText}> {imageInnerText}</Text>
                <Pressable style={styles.exerciseButton} />
              </ImageBackground>
            </View>
            <Pressable style={styles.exerciseBox} />

            <View style={styles.exerciseBox}>
              <ImageBackground
                source={require("../assets/image2.jpeg")}
                style={styles.buttonImage}
              >
                <Text style={styles.imageText}> Arm </Text>
                <Pressable style={styles.exerciseButton} />
              </ImageBackground>
            </View>
            <Pressable style={styles.exerciseBox} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#06223d",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "#ECB365",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 65,
  },
  
  imageContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap:'wrap'
  },
  exerciseBox: {
    width: 170,
    height: 180,
    borderRadius: 25,
    overflow: "hidden",
    margin: 10,
  },
  exerciseButton: {
    width: 170,
    height: 180,
  },
  buttonImage: {
    flex: 1,
  },
  imageText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 10,
    textShadowColor: "white",
    fontSize: 20,
    textAlign: "left",
  },
 rotator: {
   justifyContent:'center',
   alignItems:'center',
  flexDirection:'row',

 }
});
