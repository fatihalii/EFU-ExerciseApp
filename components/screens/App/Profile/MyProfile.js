import { Text, View, StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";

const MyProfile = () => {
  return (
    <View style={viewContainer}  >
      <Text>Setting</Text>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
    viewContainer : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.primary200
        
      }
});
