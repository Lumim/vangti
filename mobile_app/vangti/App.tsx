import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Splash from "./components/homeComponents/Splash";
import Login from "./components/homeComponents/login";

const App = () => (
  <>
  <Splash/>
  <Login></Login>
  </>
);
const openup=()=>{
  alert('opened')
}
export default App;