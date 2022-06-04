import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors.js";





const Legs = () => {

    return (
      <View style={styles.viewContainer}>
        <Text>Legs PAGE</Text>
      </View>
  
    );
  };
  
  export default Legs;
  
  const styles = StyleSheet.create({
      viewContainer : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.primary200
        
      }
    });
    
  