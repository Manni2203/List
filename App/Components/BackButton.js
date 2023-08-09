//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const BackButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.fontStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  fontStyle: {
    fontWeight: '900',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#00000082',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default BackButton;
