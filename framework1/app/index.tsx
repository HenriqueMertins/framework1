import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './Login';
import BuyScreen from './BuyScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Buy" component={BuyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
