import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Map from './components/Map';

export default class App extends React.Component {
  renderMarkers() {
    return this.props.places.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords} />
    ));
  }
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
