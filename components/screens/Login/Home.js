import { Text, StyleSheet, View, Pressable } from "react-native";
import Navbar from "../App/Navbar";
import Colors from "../../../constants/colors";
const Home = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text style={{color: Colors.secondary100}} >Home Page</Text>
  
      <Pressable onPress={navigation.navigate('Navbar')}> 
      <Text style={{color:'#FFFFFF'}}  >
        Button
      </Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:Colors.primary100,

  },
});
