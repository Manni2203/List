//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BackButton from '../../Components/BackButton';

// create a component
const SingleListing = ({route, navigation}) => {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <BackButton title={'Back'} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.body}>{data.body}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
    color: '#65A7C5',
  },
  body: {
    fontSize: 15,
    color: '#DEA63E',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    flex: 1,
    margin: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000082',
  },
});

//make this component available to the app
export default SingleListing;
