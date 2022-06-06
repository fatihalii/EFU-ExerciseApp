import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors.js";
import {auth} from '../../firebase';




const Routine = () => {
  const user = auth.currentUser;
    return (
      <View style={styles.viewContainer}>
        <View>
          
        </View>
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
    
  