import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
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
