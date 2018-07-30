import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

const Marker = MapView.Marker;

export default ({ coord, text }) => (
  <Marker coordinate={coord}>
    <View
      style={{
        backgroundColor: 'rgba(170,70,200,0.7)',
        borderRadius: 25,
        width: 50,
        height: 50,
        padding: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
      }}
    >
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {text}
      </Text>
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {text}
      </Text>
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {text}
      </Text>
    </View>
  </Marker>
);
