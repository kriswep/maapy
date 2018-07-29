import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Map from './components/Map';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Map />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
