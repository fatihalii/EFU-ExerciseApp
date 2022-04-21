import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Profile = () => {
  return (
    <View style={{ backgroundColor: "#06223d" }}>
      <View style={styles.header}></View>

      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
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
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>My Profile </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>My Favorite </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Feedback</Text>
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
    backgroundColor: "#06223d",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "black",
    marginBottom: 20,
    alignSelf: "center",
    position: "absolute",
    marginTop: 90,
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
