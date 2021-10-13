import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Linking,
 } from 'react-native';

export default function App() {
  const [name, setName] = useState('Bach')
  const [session, setSession] = useState({number: 11, title: "State"})

  const onClickHandler = ()=>{
    setName("Programing of Bach")
    setSession({number: session.number+1, title: session.title})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} > {name} </Text>
      <View>
        <Text style={styles.text} > This is session numner {session.number} and about {session.title} </Text>
        <Button title="Update State" onPress={ onClickHandler } > </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: "#fffccc",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});
