import { Text, View, StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";

const Settings = () => {
  return (
    <View style={viewContainer}  >
      <Text>Setting</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
    viewContainer : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.primary200
        
      }
});
