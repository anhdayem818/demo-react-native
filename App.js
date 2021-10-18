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
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const Drawer = createDrawerNavigator();

import ScreenA from "./screens/screenA"
import ScreenB from "./screens/screenB"

const App = ()=> {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="ScreenA"
        drawerPosition="left"
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={true}
        screenOptions={{
          headerShown: true,
          swipeEnabled: false,
          headerTitleAlign: "center",
        }}
      >
        <Drawer.Screen 
          name="ScreenA"
          component={ScreenA}
          options={{
            title: "Screen A",
            drawerIcon: ()=>{
              return(
                <FontAwesome5
                  name="btc"
                >

                </FontAwesome5>
              )
            }
          }}
        >
        </Drawer.Screen>

        <Drawer.Screen 
          name="ScreenB"
          component={ScreenB}
          options={{
            title: "Screen B",
            drawerIcon: ()=>{
              return(
                <FontAwesome5
                  name="btc"
                >

                </FontAwesome5>
              )
            }
          }}
          
        >
        </Drawer.Screen>
      </Drawer.Navigator>
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