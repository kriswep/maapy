import React from 'react';
import { MapView } from 'expo';

import Marker from './Marker';
import locationEmotes from '../data/locationEmotes';

export default class App extends React.Component {
  renderMarkers() {
    return locationEmotes.map(location => {
      const emotes = location.emotes.reduce(
        (acc, emote) => [...acc, emote.char],
        [],
      );
      return (
        <Marker key={location.id} coord={location.coords} emotes={emotes} />
      );
    });
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
