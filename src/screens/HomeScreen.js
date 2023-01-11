import React, { useState, useEffect, useContext } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from 'react-native';

import {
  Headline,
  TextInput,
  Button,
  DataTable,
  Text,
  Colors,
  Card,
  Paragraph,
  Title,
  Caption,
} from 'react-native-paper';
import moment from 'moment';

import { Context as AuthContext } from '../contexts/AuthContext';
import { Context as AccountContext } from '../contexts/AccountContext';
import Screen from '../components/Screen';
import Wrapper from '../components/Wrapper';
import Spacer from '../components/Spacer';
import Icon from '../components/Icon';

export default function HomeScreen({ navigation }) {
  const { signOut } = useContext(AuthContext);
  const {
    state: { account, notes},
    getAccount,
    clearAccount,
    createNote,
    getNotes,
    deleteNote
  } = useContext(AccountContext);

  const [page, setPage] = useState(0);
  const [note, setNote] = useState('');

  useEffect(() => {
    getNotes();
    const unsubscribe = navigation.addListener('focus', () => {
      getAccount();
      getNotes();
    });

    return function () {
      unsubscribe;
    };
  }, [page, navigation, notes.length]);
 
  return (
    <Screen full>
      <Wrapper>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Headline>Create motivation now!</Headline>
          <TouchableOpacity
            onPress={() => {
              signOut();
              clearAccount();
            }}
          >
            <View style={styles.iconStyle}>
              <Icon name="logout" color={Colors.white} />
            </View>
          </TouchableOpacity>
        </View>
        <Text>Hi, {account.name ? account.name : null}</Text>
      </Wrapper>
      <Spacer mb={4} />
      <Wrapper>
        <TextInput
          label="what are you thinking? write here"
          style={styles.input}
          mode="outlined"
          multiline
          value={note}
          onChangeText={setNote}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Spacer mb={16} />
        <Button
          mode="contained"
          icon="share"
          onPress={() => createNote({ note, account})}
        >
          Share
        </Button>
      </Wrapper>
      <Spacer />
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Wrapper>
              <Card>
                <Card.Content>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Icon name="person" mr={8} size={32} />
                    <View>
                      <Text>{item.name}</Text>
                      <Caption>{moment(item.created_at).fromNow()}</Caption>
                    </View>
                  </View>
                  <Spacer mb={8} />
                  <Paragraph>{item.isi_motivasi}</Paragraph>
                  <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => deleteNote({'ids':item.id})}>
                      <Icon name="delete" color={'red'} size={20} />
                    </TouchableOpacity>
                  </View>
                </Card.Content>
              </Card>
              <Spacer />
            </Wrapper>
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  input: {
    lineHeight: 5,
  },
  iconStyle: {
    width: 45,
    height: 45,
    backgroundColor: Colors.deepPurpleA700,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
