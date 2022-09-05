import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Landing = () => (


  <AppBar
    title="Vangti"
    leading={props => (
      <IconButton onTouchEnd={openup} icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <HStack>
        <IconButton
          icon={props => <Icon name="magnify" {...props} />}
          {...props}
        />
        <IconButton
          icon={props => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      </HStack>
    )}
  />
);
const openup=()=>{
  alert('opened')
}
export default Landing;