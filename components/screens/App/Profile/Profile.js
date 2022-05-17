import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../../../../constants/Colors.js";

const Profile = () => {
  return (
    <View style={{ backgroundColor: Colors.primary200 }}>
      <View style={styles.header}>
        
      </View>

      <Image
        style={styles.avatar}
        source={require("../../../../assets/profile-icon-9.png")}
      />
      <Text
        style={{
          paddingTop: 50,
          textAlign: "center",
          color: "white",
          fontSize: 30,
        }}
      >
        Emin Furat
      </Text>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <TouchableOpacity style={styles.buttonContainer}
          >
            <Text>My Profile </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Favorites </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary200,
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 3,
    borderColor: "black",
    marginBottom: 20,
    alignSelf: "center",
    position: "absolute",
    marginTop: 90,
    backgroundColor: "#FFFFFF",
  },
  body: {
    marginTop: 10,
  },
  bodyContent: {
    alignItems: "center",
    padding: 50,
  },
  buttonContainer: {
    marginTop: 18,
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 320,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.8)",
  },
});
