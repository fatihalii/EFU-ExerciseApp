import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors.js";




const Triceps = () => {
  
    return (
      <View style={styles.viewContainer}>
        <Text>Triceps PAGE</Text>
      </View>
  
    );
  };
  
  export default Triceps;
  
  const styles = StyleSheet.create({
      viewContainer : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.primary200
        
      }
    });
    
  