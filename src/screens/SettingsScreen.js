import React from 'react';
import { Headline } from 'react-native-paper';

import Screen from '../components/Screen';
import Wrapper from '../components/Wrapper';

export default function SettingScreen({ navigation }) {
  return (
    <Screen full>
      <Wrapper>
        <Headline>SettingScreen</Headline>
      </Wrapper>
    </Screen>
  );
}
