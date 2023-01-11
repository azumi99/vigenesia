import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { TextInput, Button, Headline, Colors } from 'react-native-paper';

import { Context as AuthContext } from '../contexts/AuthContext';

import Screen from '../components/Screen';
import Wrapper from '../components/Wrapper';
import Spacer from '../components/Spacer';
import CenterHorizontal from '../components/CenterHorizontal';
import ErrorText from '../components/ErrorText';

export default function SignupScreen({ navigation }) {
  const {
    state: { errorMessage },
    signup,
    clearError,
  } = useContext(AuthContext);

  const [name, setName] = useState('');
  // const [profesi, setProfesi] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      clearError();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <Screen full>
      <ScrollView>
        <Wrapper ph={32}>
          <CenterHorizontal>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={require('../images/signup.png')}
            />
          </CenterHorizontal>

          <CenterHorizontal>
            <Headline>Buat akun baru</Headline>
          </CenterHorizontal>
          <Spacer mb={16} />

          {errorMessage ? <ErrorText mb={16} text={errorMessage} /> : null}

          <TextInput
            mode="outlined"
            label="Nama"
            left={
              <TextInput.Icon name="account" color={Colors.deepPurple700} />
            }
            value={name}
            onChangeText={setName}
          />
          <Spacer />

          {/* <TextInput
            mode="outlined"
            label="Profesi"
            left={<TextInput.Icon name="desk" color={Colors.deepPurple700} />}
            value={profesi}
            onChangeText={setProfesi}
          />
          <Spacer /> */}

          <TextInput
            mode="outlined"
            label="Email"
            autoCapitalize="none"
            left={<TextInput.Icon name="email" color={Colors.deepPurple700} />}
            value={email}
            onChangeText={setEmail}
          />
          <Spacer />

          <TextInput
            secureTextEntry
            mode="outlined"
            label="Password"
            left={<TextInput.Icon name="lock" color={Colors.deepPurple700} />}
            value={password}
            onChangeText={setPassword}
          />
          <Spacer />

          <Button
            mode="text"
            uppercase={false}
            onPress={() => navigation.push('Signin')}
          >
            Sudah punya akun? Masuk
          </Button>
          <Spacer mb={16} />

          <Button
            icon="login"
            mode="contained"
            onPress={() => {
              signup({ name, email, password })}}
          >
            Daftar
          </Button>
          <Spacer />
        </Wrapper>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
});
