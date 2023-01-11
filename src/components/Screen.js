import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Screen({
  children,
  style,
  full,
  bgColor = '#fff',
  bottom = 16,
}) {
  return (
    <SafeAreaView
      style={[{ flex: full ? 1 : 0, backgroundColor: bgColor }, style]}
    >
      <StatusBar />
      <View style={{ marginBottom: bottom }} />
      {children}
    </SafeAreaView>
  );
}
