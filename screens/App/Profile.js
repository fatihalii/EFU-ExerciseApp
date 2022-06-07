import {
  ImageBackground,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/Colors";
import { auth, db } from "../../db/firebase";
import { deleteUser, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc } from "firebase/firestore";



const Profile = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();

  const [name, setName] = useState("");

  const getName = () => {
    getDoc(doc(db, "users", user?.uid))
      .then((response) => {
        const result = response.get("Name");
        setName(result);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.message);
      });
  };
  useEffect(() => {
    getName();
  }, []);

  const exit = () => {
    signOut(auth)
      .then(() => {
        alert("Signed out");
        navigation.navigate("HomePage");
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };

  const eraseUser = () => {
    deleteUser(user)
      .then(() => {
        alert("You have successfully deleted your account.");
        navigation.navigate("HomePage");
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };

  return (
    
    <View style={styles.viewContainer}>
      <View style={styles.coverPhoto}>
        <ImageBackground
          source={require("../../assets/background-img.jpg")}
          style={styles.backgroundImg}
        >
          <View style={styles.layoutRow}>
            <View style={styles.ppContainer}>
              <Image
                source={require("../../assets/moon-knight.jpg")}
                style={styles.ppShaper}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.usernameContainer}>{name}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.stickTop}>
          <View style={styles.seperatorTop}></View>
          <View style={styles.seperator}>
            <View style={styles.button}>
              <TouchableOpacity onPress={()=>navigation.navigate("MyStats")} >
                <View style={styles.layoutRowNew}>
                  <MaterialCommunityIcons
                    name="chart-donut"
                    color="#FFF"
                    size="40"
                  />
                  <Text style={styles.textStyle}>My Stats</Text>
                  <MaterialCommunityIcons
                    name="menu-right"
                    color="#FFF"
                    size="40"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.seperator}>
            <View style={styles.button}>
              <TouchableOpacity onPress={()=>navigation.navigate("History")} >
                <View style={styles.layoutRowNew}>
                  <MaterialCommunityIcons
                    name="history"
                    color="#FFF"
                    size="40"
                  />
                  <Text style={styles.textStyle}>History</Text>
                  <MaterialCommunityIcons
                    name="menu-right"
                    color="#FFF"
                    size="40"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View> */}
          <View style={styles.seperator}>
            <View style={styles.button}>
              <TouchableOpacity onPress={()=>navigation.navigate("PrivacyPolicy")} >
                <View style={styles.layoutRowNew}>
                  <MaterialCommunityIcons
                    name="home-account"
                    color="#FFF"
                    size="40"
                  />
                  <Text style={styles.textStyle}>Privacy Policy</Text>
                  <MaterialCommunityIcons
                    name="menu-right"
                    color="#FFF"
                    size="40"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.stickBottom}>
          <View style={styles.seperator}></View>
          <View style={styles.seperator}>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => exit()}>
                <View style={styles.layoutRowNew}>
                  <MaterialCommunityIcons
                    name="account-off-outline"
                    color="#FFF"
                    size="40"
                  />
                  <Text style={styles.textStyle}>Sign Out</Text>
                  <MaterialCommunityIcons
                    name="menu-right"
                    color="#FFF"
                    size="40"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.seperator}>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => eraseUser()}>
                <View style={{ textAlign: "center" }}>
                  {/* <MaterialCommunityIcons
                    name="account-cancel"
                    color="#E34C4E"
                    size="40"
                  /> */}
                  <Text style={[styles.textStyleDelete, { color: "#E34C4E" }]}>
                    Delete Account
                  </Text>
                  {/* <MaterialCommunityIcons
                    name="menu-right"
                    color="#E34C4E"
                    size="40"
                  /> */}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    marginLeft: 10,
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
    flexDirection: "column",
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
    borderBottomColor: "#FFF",
    borderBottomWidth: 0.5,
  },
  seperatorTop: {
    width: "100%",
    height: 60,
    borderBottomColor: "#FFF",
    borderBottomWidth: 0.5,
  },
  textStyle: {
    alignSelf: "center",
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "PingFang TC",
    fontSize: 27,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, //This one is for Android
  },
  button: {
    margin: 10,
  },
  layoutRowNew: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  stickBottom: {
    paddingTop: 35,
  },
  stickTop: {
    paddingTop: 5,
  },
  textStyleDelete: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "PingFang TC",
    fontSize: 25,
    fontWeight: "bold",
  },
});
