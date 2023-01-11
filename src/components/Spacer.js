import React from 'react';
import { View } from 'react-native';

export default function Spacer({ mb = 16 }) {
  return <View style={{ marginBottom: mb }} />;
}
