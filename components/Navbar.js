import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Exercise from "../screens/Exercise";
import Motivation from "../screens/Motivation";
import Routine from "../screens/Routine";
import Profile from "../screens/Profile";

const tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ECB365",
        tabBarInactiveTintColor:'#FFFFFF',
        tabBarStyle: { backgroundColor: "#041C32", borderTopColor: "#FFFFFF" },
        
      }}
    >
      <tab.Screen
        name="Motivation"
        component={Motivation}
        options={{
          title: " ",

          tabBarLabel: "Motivation",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="battery-charging-high"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <tab.Screen
        name="Exercise"
        component={Exercise}
        options={{
          title: " ",
          tabBarLabel: "Exercise",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <tab.Screen
        name="Routine"
        component={Routine}
        options={{
          title: " ",
          tabBarLabel: "Routine",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="autorenew"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: " ",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </tab.Navigator>
  );
};

export default Navbar;
