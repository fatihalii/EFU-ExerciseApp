import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors.js";



const Routine = () => {
    return (
  
      <View style={styles.viewContainer}>
        <Text>Routine PAGE</Text>
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
    
  