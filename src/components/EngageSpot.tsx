import React from 'react';
import { Image, Text, View } from 'react-native';

const EngageSpot = ({ text }: { text: string }) => {
  return (
    <View>
      <Text>{text}</Text>
      <Text>Great package</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default EngageSpot;
