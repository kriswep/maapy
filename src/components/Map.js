import React from 'react';
import { MapView } from 'expo';

import Marker from './Marker';
import emotes from '../data/emotes';

export default class App extends React.Component {
  renderMarkers() {
    return emotes.map(emote => (
      <Marker key={emote.id} coord={emote.coords} text={emote.char} />
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
