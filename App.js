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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const Tab = createMaterialTopTabNavigator();

import ScreenA from "./screens/screenA"
import ScreenB from "./screens/screenB"

const App = ()=> {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions= { ({route})=>({
          tabBarIcon: ({focused, size, corlor})=>{
            let iconName;
            if(route.name==='ScreenA'){
              iconName= 'autoprefixer';
              size = focused ? 25: 20
            }else if(route.name === 'ScreenB'){
              iconName= 'btc';
              size = focused ? 25: 20
            }
            let color = focused ? '#f0f' : '#555'

            return(
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              >

              </FontAwesome5>
            )
          },
        })}
        tabBarOptions={{
          showLabel: false,
        }}
        barStyle={{
          backgroundColor: "#ca3"
        }}
      >
        <Tab.Screen 
          name="ScreenA"
          component={ScreenA}
          options={{
            header: ()=> null
          }}
        >
        </Tab.Screen>

        <Tab.Screen 
          name="ScreenB"
          component={ScreenB}
          options={{
            header: ()=> null
          }}
          
        >
        </Tab.Screen>
      </Tab.Navigator>
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