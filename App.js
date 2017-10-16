import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  componentDidMount() {
    console.log("before");
    debugger
    console.log("after");
  }
  render() {
    return (
      <View style={styles.container}>
        <MaterialIcons name='directions-walk' color='darkgrey' size={50} />
        <Text style={styles.test}><Ionicons name='ios-leaf' color='green' size={30} />Ivy's First React-Native app!</Text>
        <Text style={{color: 'red'}}>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    fontFamily: 'Cochin',
  }
});
