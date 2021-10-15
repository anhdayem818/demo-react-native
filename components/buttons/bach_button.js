import React from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';

const BachBtn = (props) => {
  return (
    <View style={styles.text}>
      <Pressable
        onLongPress={props.onPressHandler}
        delayLongPress={1000}
        style={ ({pressed}) => [
          {backgroundColor: pressed ? "#ddd" : "#0f0" },
          styles.button,
        ] }
        android_ripple={{color: '#00f'}}
      >
        <Text style={styles.text}>
          {props.title}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    borderWidth: 1,
    borderColor: '#dda',
    backgroundColor: "#0f0",
    height: 50,
    width: 100,
    textAlign: 'center',
    justifyContent: 'center',
  },
})
export default BachBtn;