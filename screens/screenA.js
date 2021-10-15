import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';


const ScreenA = ({navigation})=> {
  const onHandlerPress=()=>{
    navigation.navigate('ScreenB')
  }
  return(
    <View style={styles.container}>
      <Text
        style={styles.userText}
      >
        Screen A
      </Text>
      <Pressable 
        style={styles.logoutBtn}
        onPress = {onHandlerPress}
      >
        <Text style={styles.logoutText}> Go Screen B </Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboardWrapper:{

  },
  userText:{
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  logoutBtn: {
    backgroundColor: "red",
    paddingVertical: 10,
    width: 100,
    alignSelf: "center",
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff",
  },
  logoutText:{
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
  }
});
export default ScreenA;
