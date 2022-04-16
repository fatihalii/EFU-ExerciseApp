import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Feather } from "@expo/vector-icons";
import Navbar from "./components/Navbar";



export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Navbar />
      </NavigationContainer>
    </>
  );
}


