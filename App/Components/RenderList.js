//import liraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const RenderList = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SingleListing', {data: item});
      }}
      style={{
        padding: 15,
        backgroundColor: '#00000082',
        margin: 10,
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: '#65A7C5',
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: '#DEA63E',
        }}>
        {item.body}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default RenderList;
