import React from 'react';
import { View } from 'react-native';

export default function CenterVertical({ children }) {
  return <View style={{ justifyContent: 'center' }}>{children}</View>;
}
