import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

const Marker = MapView.Marker;

export default ({ coord, emotes }) => {
  console.log('marker', emotes);
  return (
    <Marker coordinate={coord}>
      <View
        style={{
          backgroundColor: 'rgba(170,70,200,0.7)',
          borderRadius: 40,
          width: 80,
          height: 80,
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
            fontSize: 24,
          }}
        >
          {emotes[0]}
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 24,
          }}
        >
          {emotes[1]}
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 24,
          }}
        >
          {emotes[2]}
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 24,
          }}
        >
          {emotes[3]}
        </Text>
      </View>
    </Marker>
  );
};
