import React, { useEffect, useContext, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Headline, Colors } from 'react-native-paper';
import FlashMessage, { showMessage } from 'react-native-flash-message';

import { Context as AuthContext } from '../contexts/AuthContext';
import Screen from '../components/Screen';
import Wrapper from '../components/Wrapper';
import Spacer from '../components/Spacer';
import CenterHorizontal from '../components/CenterHorizontal';
import CenterVertical from '../components/CenterVertical';
import ErrorText from '../components/ErrorText';

export default function SigninScreen({ navigation, route }) {
  const {
    state: { success, errorMessage },
    signin,
    clearError,
  } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const focus = navigation.addListener('focus', () => {
      if (success) {
        showMessage({
          message: success,
          position: 'top',
          floating: true,
          type: 'success',
          icon: 'success',
        });
      }
    });

    const blur = navigation.addListener('blur', () => {
      clearError();
    });

    return function () {
      focus;
      blur;
    };
  }, [success, navigation]);
  
  return (
    <Screen full>
      <CenterVertical>
        <Wrapper ph={32}>
          <CenterHorizontal>
            <Headline style={{ fontSize: 32 }}>Vigenesia</Headline>
          </CenterHorizontal>

          <CenterHorizontal>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={require('../images/signin.png')}
            />
          </CenterHorizontal>
          {errorMessage ? <ErrorText text={errorMessage} /> : null}
          <Spacer mb={16} />

          <TextInput
            mode="outlined"
            autoCapitalize="none"
            label="Email"
            left={<TextInput.Icon name="email" color={Colors.deepPurple700} />}
            value={email}
            onChangeText={setEmail}
          />
          <Spacer />

          <TextInput
            mode="outlined"
            label="Password"
            secureTextEntry
            left={<TextInput.Icon name="lock" color={Colors.deepPurple700} />}
            value={password}
            onChangeText={setPassword}
          />
          <Spacer />

          <Button
            mode="text"
            uppercase={false}
            onPress={() => navigation.push('Signup')}
          >
            Belum punya akun? Daftar
          </Button>
          <Spacer mb={16} />

          <Button
            icon="login"
            mode="contained"
            onPress={() => signin({ email, password })}
          >
            Masuk
          </Button>
          <Spacer />
        </Wrapper>
      </CenterVertical>
      <FlashMessage position="top"/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300,
  },
});
