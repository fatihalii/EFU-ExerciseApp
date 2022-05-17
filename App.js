import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navbar from "./components/screens/App/Navbar";
import Home from "./components/screens/Login/Home";
import Register from "./components/screens/Login/Register";
import Colors from "./constants/Colors";
import MyProfile from "./components/screens/App/Profile/MyProfile";
import Help from "./components/screens/App/Profile/Help";
import Settings from "./components/screens/App/Profile/Settings";
import Favorites from "./components/screens/App/Profile/Favorites";



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="AppPage" component={Navbar} options={{headerShown:false}}  />
          <Stack.Screen name="RegisterPage" component={Register} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100,
          title:'',
          }
          
          }  />
          <Stack.Screen name="MyProfile" component={MyProfile} options={{headerShown:false}} />
          <Stack.Screen name="Favorites" component={Favorites} options={{headerShown:false}} />
          <Stack.Screen name="Help" component={Help} options={{headerShown:false}} />
          <Stack.Screen name="Settings" component={Settings} options={{headerShown:false}} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
