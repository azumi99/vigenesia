import React from 'react';
import { Text, Colors } from 'react-native-paper';

import CenterHorizontal from './CenterHorizontal';

export default function ErrorText({
  text = 'message',
  color = Colors.red900,
  mb = 0,
}) {
  return (
    <CenterHorizontal>
      <Text style={{ color: color, marginBottom: mb }}>{text}</Text>
    </CenterHorizontal>
  );
}
