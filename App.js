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

export default function App() {
  const [name, setName] = useState('Bach')
  const [submidtted, setSubmidtted]= useState(false)
  const onPressHandler = () =>{
    setSubmidtted(!submidtted)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Write some thiing</Text>
      <TextInput 
        style={styles.text_inputs}
        placeholder="Name"
        onChangeText={(value)=>setName(value) }
      > 
      </TextInput>
      {/* <Button title="Submit" onPress={onPressHandler} >
      </Button> */}

      <View style={styles.text}>
        <Pressable
          // onPress={onPressHandler}
          onLongPress={onPressHandler}
          delayLongPress={1000}
          style={ ({pressed}) => [
            {backgroundColor: pressed ? "#ddd" : "#0f0" },
            styles.button,
          ] }
          android_ripple={{color: '#00f'}}
        >
          <Text style={styles.text}>
            { submidtted ? 'Clear' : 'Submit' }
          </Text>
        </Pressable>
      </View>

      {
        submidtted ? 
          <View>
            <Text> Hello {name}</Text>
          </View>
        :
        null 
      }
    </View>
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
  text: {
    textAlign: 'center',
  },
  text_inputs: {
    borderWidth: 1,
    borderColor: '#555',
    fontSize: 15,
  },
  button:{
    borderWidth: 1,
    borderColor: '#dda',
    backgroundColor: "#0f0",
    height: 50,
    width: 100,
    textAlign: 'center',
    justifyContent: 'center',
  }
});
