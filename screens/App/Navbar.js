import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Exercise from "./Exercise";
import Routine from "./Routine";
import Profile from "./Profile";
import Colors from "../../constants/Colors";

const tab = createBottomTabNavigator();

const Navbar = () => {

  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.secondary100,
        tabBarInactiveTintColor:Colors.secondary200,
        tabBarStyle: { backgroundColor: Colors.primary100, borderTopColor: "#FFFFFF" },
        
      }}
    >
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
