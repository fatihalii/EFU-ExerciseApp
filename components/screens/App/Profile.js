import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors.js";

const Profile = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>Profile Page</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary200,
  },
});
