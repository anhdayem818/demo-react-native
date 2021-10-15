import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Linking,
  ScrollView,
  TextInput,
  Pressable
 } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import ScreenA from "./screens/screenA"
import ScreenB from "./screens/screenB"

const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ()=> null,
        }}
      >
        <Stack.Screen 
          name="ScreenA"
          component={ScreenA}
          options={{
            header: ()=> null
          }}
        >
        </Stack.Screen>

        <Stack.Screen 
          name="ScreenB"
          component={ScreenB}
          
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ccc"
  },
});


export default App;