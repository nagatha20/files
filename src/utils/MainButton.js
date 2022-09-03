import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {mainColor} from './GlobalStyles';

export default function mainButton({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.body}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '95%',
    padding: 10,
    backgroundColor: mainColor,
    color: 'white',
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
