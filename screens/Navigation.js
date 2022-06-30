import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import NewPostScreen from  './NewPostScreen';

const Stack = createStackNavigator();
const screenOptions = {
    headerShown: false
}

const SignedInStack = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
              <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
              <Stack.Screen name="NewPostScreen" component={NewPostScreen}></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default SignedInStack;