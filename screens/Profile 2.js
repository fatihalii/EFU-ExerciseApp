import { View, Text, StyleSheet } from "react-native";



const Profile = () => {
  return (

    <View style={styles.viewContainer}>
      <Text>PROFILE PAGE</Text>
    </View>

  );
};

export default Profile;

const styles = StyleSheet.create({
    viewContainer : {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#06223d'
      
    }
  });
  
