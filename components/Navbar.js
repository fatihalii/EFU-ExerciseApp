import { Text, StyleSheet, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ProfileComponent = () => <View style={styles.viewContainer}><Text>PROFILE PAGE</Text></View> ;
const ExerciseComponent = () => <View style={styles.viewContainer}><Text>EXERCISE PAGE</Text></View> ;
const RoutineComponent = () => <View style={styles.viewContainer}><Text>ROUTINE PAGE</Text></View> ;
const MotivationComponent = () => <View style={styles.viewContainer}><Text>MOTIVATION PAGE</Text></View> ;

const tab = createBottomTabNavigator();

const Navbar = () => {
  return (

    <tab.Navigator 
    screenOptions={{headerShown: false}}
    tabBarOptions={
      {
      activeTintColor: '#CDBE78', 

    }} >
       <tab.Screen name="Motivation" component={MotivationComponent} options={{
         title: " ",

          tabBarLabel: 'Motivation',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="battery-charging-high" color={color} size={size} />
          ),
        }} />
      <tab.Screen name="Exercise" component={ExerciseComponent} options={{
        title: " ",
          tabBarLabel: 'Exercise',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="weight-lifter" color={color} size={size} />
          ),
        }} />
      <tab.Screen name="Routine" component={RoutineComponent} options={{
        title: " ",
          tabBarLabel: 'Routine',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="autorenew" color={color} size={size} />
          ),
        }} />
      <tab.Screen name="Profile" component={ProfileComponent} options={{
        title: " ",
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
        }} />
    </tab.Navigator>
  );
};


export default Navbar;

const styles = StyleSheet.create({
  viewContainer : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#066163'
    
  }
});
