import * as React from 'react';
import { StackActions } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from '@ui-kitten/components';

import GlobalStyles from "../styles/GlobalStyles";
import AsyncStorage from "../helpers/AsyncStorage";

import theme from "../theme/theme.json"

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme['color-primary-500'],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    alignSelf: 'center',
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 100
  },
  welcomeText: {
    color: "#fff",
    fontSize: 24
  },
  form: {
    alignSelf: 'center',
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 5,
    elevation: 4,
  },
  inputBox: {
    width: "100%",
    marginTop: 5,
    marginBottom: 10
  },
  applyButton: {
    marginTop: 20
  }
})

export default function FirstOpenScreen({ navigation }: any) {

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [firstOpen, setFirstOpen] = React.useState("");

  const submit = async () => {
    await AsyncStorage.set('firstName', firstName);
    await AsyncStorage.set('lastName', lastName);
    await AsyncStorage.set('firstOpen', "false");

    navigation.navigate('Menu');
  }

  const onInput = function (stateSetter: any, val: string) {
    stateSetter(val);
  }

  const evaluateFirstOpen = async () => {
    const res = await AsyncStorage.get('firstOpen');
    if (res === "true") {
      setFirstOpen("true");
    }
    else {
      setFirstOpen("false");
      navigation.replace('Menu');
    }
  }

  React.useEffect(() => {
    evaluateFirstOpen(); //comment out for testing
    //setFirstOpen("true"); //for testing purposes
  })

  const _content = (
    <View style={{ ...GlobalStyles.mainContainer, ...styles.container }}>

      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.welcomeText}>Please tell us who you are</Text>
      </View>

      <View style={GlobalStyles.mainWrapper}>
        <View style={styles.form}>
          <Input
            placeholder='First Name'
            defaultValue={firstName}
            style={styles.inputBox}
            onChangeText={val => onInput(setFirstName, val)}
          />
          <Input
            placeholder='Last Name'
            defaultValue={lastName}
            style={styles.inputBox}
            onChangeText={val => onInput(setLastName, val)}
          />
          <Button onPress={submit}>Submit</Button>
        </View>
      </View>
    </View>
  )

  return (
    <View style={GlobalStyles.mainContainer}>
      {
        firstOpen === "true" ? _content : <></>
      }
    </View>
  )
}