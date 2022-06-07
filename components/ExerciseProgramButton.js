import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import Colors from "../constants/Colors";

import { useNavigation } from "@react-navigation/native";


const ExerciseProgramButton = (props) => {
  const navigation = useNavigation();


  
  return (
    <View style={styles.programContainer}>
        <TouchableOpacity
          style={styles.program}
          onPress={()=>navigation.navigate(props.Nav)}
        >
          <Text style={styles.texts}>{props.Type}</Text>
          <Image source={require('../assets/routine.png')} style={styles.image} />
          <Text style={styles.texts}>{props.Place}</Text>
        </TouchableOpacity>
      </View>
  );
};

export default ExerciseProgramButton;

const styles = StyleSheet.create({
  programContainer: {
    marginTop:13,
    width: 300,
    height: 120,
    borderRadius: 15,
    alignItems: "center",
    
  },
  program: {
    width: 300,
    height: 120,
    backgroundColor: Colors.primary300,
    borderRadius: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row'
  },
  texts:{
    color:Colors.secondary100,
    marginTop:8,
    fontSize:15,
    marginLeft:40,
    marginRight:40
  },
  image: {
    width:100,
    height:100,
    position:'absolute'
  }
});
