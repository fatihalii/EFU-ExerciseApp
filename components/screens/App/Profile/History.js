import { View, Text, StyleSheet,} from "react-native";
import Colors from "../../../../constants/Colors";


const History = () => {

    return (
      <View style={styles.viewContainer}>
        <Text>History PAGE</Text>
      </View>
  
    );
  };
  
  export default History;
  
  const styles = StyleSheet.create({
      viewContainer : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.primary200
        
      }
    });
    
  