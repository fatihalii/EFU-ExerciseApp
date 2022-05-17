import { Text, View, StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";

const Help = () => {
  return (
    <View style={viewContainer}  >
      <Text>Setting</Text>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
    viewContainer : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.primary200
        
      }
});
