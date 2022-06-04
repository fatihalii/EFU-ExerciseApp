import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors.js";


const Arm = () => {

  return (
    <View style={styles.viewContainer}>
      <Text>Arm PAGE</Text>
    </View>
  );
};

export default Arm;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary200,
  },
});
