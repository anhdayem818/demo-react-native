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
 } from 'react-native';

export default function App() {
  const [name, setName] = useState('Bach')
  const [session, setSession] = useState({number: 11, title: "State"})

  const [Items, setItems] = useState([
    { key: 1, name: "Item 1"},
    { key: 2, name: "Item 2"},
    { key: 3, name: "Item 3"},
    { key: 4, name: "Item 4"},
    { key: 5, name: "Item 5"},
    { key: 6, name: "Item 6"},
    { key: 7, name: "Item 7"},
    { key: 8, name: "Item 8"},
    { key: 9, name: "Item 9"},
    { key: 10, name: "Item 10"},
    { key: 11, name: "Item 11"},
  ])
  const onClickHandler = ()=>{
    setName("Programing of Bach")
    setSession({number: session.number+1, title: session.title})
  }

  return (
    <View style={styles.container}>
      <Text> Write some thiing</Text>
      <TextInput 
        style={styles.text_inputs}
        placeholder="Name"
        onChangeText={(value)=>setName(value) }
      > 
      </TextInput>

      <Text> {name}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: "#ccc"
  },
  text_inputs: {
    borderWidth: 1,
    borderColor: '#555',
    fontSize: 15,
  }
});
