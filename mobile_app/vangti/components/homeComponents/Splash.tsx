import React from 'react'
import { Button } from 'react-native'
const Splash=({navigation})=> {
  return (
    <>
    <div>Splash+ {name}</div>
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('login', { name: 'Login' })
      }
    />
    </>
  )
}

export default Splash