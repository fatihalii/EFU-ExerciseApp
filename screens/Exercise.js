import { View, Text, StyleSheet } from "react-native";


const Exercise = () => {
    return (
  
      <View style={styles.viewContainer}>
        <Text>Exercise PAGE</Text>
      </View>
  
    );
  };
  
  export default Exercise;
  
  const styles = StyleSheet.create({
      viewContainer : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#06223d'
        
      }
    });
    
  