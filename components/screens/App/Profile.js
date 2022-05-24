import {
  ImageBackground,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import Colors from "../../../constants/Colors.js";

const Profile = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.coverPhoto}>
        <ImageBackground
          source={require("../../../assets/background-img.jpg")}
          style={styles.backgroundImg}
        >
          <View style={styles.layoutRow}>
            <View style={styles.ppContainer}>
              <Image
                source={require("../../../assets/moon-knight.jpg")}
                style={styles.ppShaper}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.usernameContainer}>Marc Spector</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.seperatorTop}></View>
        <Pressable style={styles.seperator}>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.textStyle}>My Stats</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
        <Pressable style={styles.seperator}>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.textStyle}>History</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
        <Pressable style={styles.seperator}>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.textStyle}>Account Settings</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
        <Pressable style={styles.seperator}>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.textStyle}>Delete Profile</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
        <Pressable style={styles.seperator}>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.textStyle}>Some Menu</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.primary200,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  coverPhoto: {
    height: "35%",
    width: "100%",
  },
  ppContainer: {
    flex: 1,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5, //This one is for Android
    padding: 10,
    marginTop: "35%", //Nice...
  },
  ppShaper: {
    width: 120,
    height: 120,
    borderRadius: 200 / 2,
  },
  infoContainer: {
    flex: 2,
    marginBottom: 10,
  },
  usernameContainer: {
    flex: 1,
    color: "#FFFFFF",
    fontFamily: "PingFang TC",
    fontSize: 35,
    marginTop: "65%",
    marginLeft:10,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5, //This one is for Android
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
    marginBottom: 40,
  },
  layoutRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contentContainer: {
    flex: 2,
  },
  buttonContainer: {
    marginTop: 40,
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 320,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5, //This one is for Android
  },
  buttonText: {
    fontSize: 40,
    fontFamily: "Sinhala Sangam MN",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5, //This one is for Android
  },
  seperator: {
    width: "100%",
    height: 60,
    borderBottomColor: "#607D8B",
    borderBottomWidth: 1.3,
  },
  seperatorTop: {
    width: "100%",
    height: 60,
    borderBottomColor: "#607D8B",
    borderBottomWidth: 1.3,
  },
  textStyle: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "PingFang TC",
    fontSize: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, //This one is for Android
  },
  button: {
    margin: 10,
  },
});
