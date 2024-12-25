import React from 'react';
import { View,Text } from 'react-native';
import Header from './Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
function Routing() {

    const Stack = createNativeStackNavigator();
    
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Routing