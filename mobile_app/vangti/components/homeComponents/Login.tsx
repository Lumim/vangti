import React from 'react'
import {TextInput,Text,Button,Stack  } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
function Login() {
  return (
    <>
    <Text variant="h3" style={{ margin: 16 }}>
    Vangti Login
  </Text>
    <TextInput variant="outlined" label="User Email" style={{ margin: 16 }} />
    <br />
    <TextInput variant="outlined" label="User Password" style={{ margin: 16 }} />
 
        <Stack fill center spacing={4}>
        <Button title="Login" />
        
    </Stack>
    </>
  )
}

export default Login