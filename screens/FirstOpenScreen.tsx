import * as React from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from '@ui-kitten/components';

import GlobalStyles from "../styles/GlobalStyles";
import AsyncStorage from "../helpers/AsyncStorage"

const styles = StyleSheet.create({
  startScreen: {
  },
  inputBox: {
    marginTop: 5,
    marginBottom: 10
  },
  applyButton: {
    marginTop: 20
  }
})

export default function StartScreen({ navigation }: any) {

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");

  const submit = async () => {
    await AsyncStorage.set('firstName', firstName);
    await AsyncStorage.set('lastName', lastName);
    await AsyncStorage.set('firstOpen', "true");

    navigation.navigate('Start');
  }

  const onInput = function (stateSetter: any, val: string) {
    stateSetter(val);
  }

  const firstOpen = async () => {
    return await AsyncStorage.get('firstOpen');
  }

  if (!firstOpen) {
    navigation.navigate('Start');
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      <Text>Hi! Welcome to the App.</Text>
      <Text>Tell us who you are:</Text>

      <Text>First Name</Text>
      <Input
        placeholder='First Name'
        defaultValue={firstName}
        style={styles.inputBox}
        onChangeText={val => onInput(setFirstName, val)}
      />

      <Text>Last Name</Text>
      <Input
        placeholder='Last Name'
        defaultValue={lastName}
        style={styles.inputBox}
        onChangeText={val => onInput(setlastName, val)}
      />

      <Button onPress={submit}>Submit</Button>
    </View>
  )
}