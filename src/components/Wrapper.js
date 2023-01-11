import React from 'react';
import { View } from 'react-native';

export default function Wrapper({ children, ph = 16 }) {
  return <View style={{ paddingHorizontal: ph }}>{children}</View>;
}
