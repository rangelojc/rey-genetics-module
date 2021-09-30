import React from 'react';

import { View, StyleSheet } from 'react-native';

import { Text, Input, Button } from '@ui-kitten/components';

import AsyncStorage from "../helpers/AsyncStorage"
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";


let styles = StyleSheet.create({
  inputBox: {
    marginTop: 5,
    marginBottom: 10
  },
  applyButton: {
    marginTop: 20
  }
})

export default () => {
  const [defaultForm, setDefaultForm]: any = React.useState({});
  const [firstName, setFirstName]: any = React.useState('');
  const [lastName, setLastName]: any = React.useState('');

  const [applyButtonState, setApplyButtonState] = React.useState('noChange'); //noChange, hasChange, saved

  const initState = async function () {
    let fn: any = await AsyncStorage.get('firstName');
    let ln: any = await AsyncStorage.get('lastName');

    setDefaultForm({
      firstName: fn,
      lastName: ln
    });
  }

  const applySettings = async function () {
    await AsyncStorage.set('firstName', firstName);
    await AsyncStorage.set('lastName', lastName);
    setApplyButtonState('saved');
  }

  const onInput = function (stateSetter: any, val: string) {
    stateSetter(val);
    setApplyButtonState('hasChange');
  }

  initState();

  let applyButton = null;
  switch (applyButtonState) {
    case "noChange": applyButton =
      <Button disabled={true} onPress={applySettings}>No Changes</Button>; break;
    case "hasChange": applyButton =
      <Button disabled={false} onPress={applySettings}>Apply</Button>; break;
    case "saved": applyButton =
      <Button disabled={true} onPress={applySettings}>Applied</Button>; break;
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      <Header title="Settings" />

      <View style={{ ...GlobalStyles.containerWrapper }}>

        <Text>First Name</Text>
        <Input
          placeholder='First Name'
          defaultValue={defaultForm?.firstName}
          style={styles.inputBox}
          onChangeText={val => onInput(setFirstName, val)}
        />

        <Text>Last Name</Text>
        <Input
          placeholder='Last Name'
          defaultValue={defaultForm?.lastName}
          style={styles.inputBox}
          onChangeText={val => onInput(setLastName, val)}
        />

        {applyButton}
      </View>
    </View>
  )
}