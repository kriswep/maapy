import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

const Marker = MapView.Marker;

export default ({ coord, text }) => (
  <Marker coordinate={coord}>
    <View
      style={{
        backgroundColor: 'rgba(170,70,200,0.7)',
      }}
    >
      <Text>{text}</Text>
    </View>
  </Marker>
);
