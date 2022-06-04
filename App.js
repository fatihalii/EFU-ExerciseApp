import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navbar from "./components/screens/App/Navbar";
import Home from "./components/screens/Login/Home";
import Register from "./components/screens/Login/Register";
import Mystats from "./components/screens/App/Profile/Mystats";
import History from "./components/screens/App/Profile/History";
import PrivacyPolicy from "./components/screens/App/Profile/PrivacyPolicy";
import Arm from './components/screens/App/Exercise/Arm';
import Fullbody from './components/screens/App/Exercise/Fullbody';
import Legs from './components/screens/App/Exercise/Legs';
import Triceps from './components/screens/App/Exercise/Triceps';


import Colors from "./constants/Colors";



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
          <Stack.Screen name="MyStats" component={Mystats} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          title:'My Stats',
          headerTintColor:Colors.secondary100 }} />
          <Stack.Screen name="History" component={History} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100,
          title:'Full Body'
          }} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100,
          title:'Privacy Policy'
          }} />
          <Stack.Screen name="Fullbody" component={Fullbody} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100,
          title:'Full Body'
          }} />
           <Stack.Screen name="Arm" component={Arm} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100
          }} />
           <Stack.Screen name="Legs" component={Legs} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100
          }} />
           <Stack.Screen name="Triceps" component={Triceps} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100
          }} />

          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
