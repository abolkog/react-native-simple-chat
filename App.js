import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/Routes';

export default class App extends React.Component {
  render() {
    return (
      <Routes />
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
});