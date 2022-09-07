import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Splash from "./components/homeComponents/Splash";
import Login from "./components/homeComponents/login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Splash"
      component={Splash}
      
    />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
</NavigationContainer>
);
const openup=()=>{
  alert('opened')
}
export default App;