import React from 'react';
import { View } from 'react-native';

export default function CenterHorizontal({ children }) {
  return <View style={{ alignItems: 'center' }}>{children}</View>;
}
