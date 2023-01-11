import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function Icon({ name, size = 24, color, type, mr = 0, ml = 0 }) {
  switch (type) {
    case 'material-icons':
      return (
        <View style={{ marginRight: mr, marginLeft: ml }}>
          <MaterialIcons name={name} size={size} color={color} />
        </View>
      );
    default:
      return (
        <View style={{ marginRight: mr, marginLeft: ml }}>
          <MaterialIcons name={name} size={size} color={color} />
        </View>
      );
  }
}
