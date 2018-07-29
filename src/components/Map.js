import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

const Marker = MapView.Marker;

const MyCustomMarkerView = ({ title }) => (
  <View
    style={{
      backgroundColor: 'rgba(255,255,255,0.7)',
    }}
  >
    <Text>{title}</Text>
  </View>
);

const marker = [
  {
    title: '😌',
    coords: {
      latitude: 37.88825,
      longitude: -122.6324,
    },
  },
  {
    title: '😻',
    coords: {
      latitude: 37.58825,
      longitude: -122.3324,
    },
  },
];

export default class App extends React.Component {
  renderMarkers() {
    return marker.map((marker, i) => (
      <Marker key={i} coordinate={marker.coords}>
        <MyCustomMarkerView {...marker} />
      </Marker>
    ));
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.7922,
          longitudeDelta: 0.7421,
        }}
      >
        {this.renderMarkers()}
      </MapView>
    );
  }
}
