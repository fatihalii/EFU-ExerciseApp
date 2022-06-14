import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navbar from "./screens/App/Navbar";
import Home from "./screens/Login/Home";
import Register from "./screens/Login/Register";
import Mystats from "./screens/App/Profile/Mystats";
import History from "./screens/App/Profile/History";
import PrivacyPolicy from "./screens/App/Profile/PrivacyPolicy";
import Arm from './screens/App/Exercise/Arm';
import Fullbody from './screens/App/Exercise/Fullbody';
import Legs from './screens/App/Exercise/Legs';
import Triceps from './screens/App/Exercise/Triceps';
import ArmGym from "./screens/App/Routine/ArmGym";
import ArmHouse from "./screens/App/Routine/ArmHouse";
import FullbodyGym from "./screens/App/Routine/FullbodyGym";
import FullbodyHouse from "./screens/App/Routine/FullbodyHouse";
import LegsGym from "./screens/App/Routine/LegsGym";
import LegsHouse from "./screens/App/Routine/LegsHouse";
import TricepsGym from "./screens/App/Routine/TricepsGym";
import TricepsHouse from "./screens/App/Routine/TricepsHouse";

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
           <Stack.Screen name="ArmGym" component={ArmGym} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100,
          title:'Arm Gym'
          }} />
           <Stack.Screen name="ArmHouse" component={ArmHouse} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100,
          title:'Arm House'
          }} />
          <Stack.Screen name="FullbodyGym" component={FullbodyGym} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100,
          title:'Fullbody Gym'
          }} />
          <Stack.Screen name="FullbodyHouse" component={FullbodyHouse} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100,
          title:'FullBody House'
          }} />
          <Stack.Screen name="LegsGym" component={LegsGym} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100,
          title:'Legs Gym'
          }} />
          <Stack.Screen name="LegsHouse" component={LegsHouse} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100,
          title:'Legs House'
          }} />
          <Stack.Screen name="TricepsGym" component={TricepsGym} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100,
          title:'Triceps Gym'
          }} />
          <Stack.Screen name="TricepsHouse" component={TricepsHouse} options={{headerStyle:{
            backgroundColor:Colors.primary200
          },
          headerTintColor:Colors.secondary100,
          title:'Triceps House'
          }} />

          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
