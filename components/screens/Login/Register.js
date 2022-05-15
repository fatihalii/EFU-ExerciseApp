import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import Colors from "../../../constants/Colors";

const Register = () => {
  return (
    <View style={styles.pageContainer}>
      <TextInput
        style={styles.nameInput}
        placeholder="Name"
        placeholderTextColor={Colors.secondary100}
        textAlign={"center"}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.primary200,
    alignItems: "center",
    justifyContent: "center",
  },
  nameInput: {
    width: 90,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.secondary100,
  },
});
