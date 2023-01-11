import React, { useEffect, useContext } from 'react';

import { Context as AuthContext } from '../contexts/AuthContext';
import Screen from '../components/Screen';

export default function LocalLogin({ navigation }) {
  const { localLogin } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      localLogin();
    });

    return unsubscribe;
  }, [navigation]);

  return <Screen full />;
}
