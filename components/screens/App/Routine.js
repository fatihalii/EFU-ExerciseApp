import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors.js";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;


const Routine = () => {
    return (
  
      <View style={styles.viewContainer}>
        <Text>Routine PAGE</Text>
        <Text>{user?.displayName}</Text>
        <Text>{user?.email}</Text>
      </View>
  
    );
  };
  
  export default Routine;
  
  const styles = StyleSheet.create({
      viewContainer : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.primary200
        
      }
    });
    
  