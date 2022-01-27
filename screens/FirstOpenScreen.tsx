import * as React from 'react';
import { StackActions } from '@react-navigation/native';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Text, Input, Button, IndexPath, Select, SelectItem } from '@ui-kitten/components';

import GlobalStyles from "../styles/GlobalStyles";
import AsyncStorage from "../helpers/AsyncStorage";

import theme from "../theme/theme.json"
import { useEffect } from 'react';

const sexTypes = [
  'Male',
  'Female'
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme['color-secondary-200'],

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },
  welcome: {
    display: "flex",
    alignSelf: 'center',
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 200
  },
  welcomeText: {
    color: theme['color-primary-500'],
    fontSize: 30,
    fontWeight: "bold"
  },
  welcomeText2: {
    color: theme['color-primary-500'],
    fontSize: 18,
    marginTop: 5
  },
  formWrapper: {
    display: "flex",
    marginTop: 0
  },
  form: {
    alignSelf: 'center',
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    elevation: 4,
  },
  inputBox: {
    width: "100%",
    marginTop: 5,
    marginBottom: 10
  },
  selectBox: {
    marginTop: 5,
    marginBottom: 10
  },
  submit: {
    marginTop: 20
  }
})

export default function FirstOpenScreen({ navigation }: any) {

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [firstOpen, setFirstOpen] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState<any>(new IndexPath(0));

  useEffect(() => {
    evaluateFirstOpen(); //comment out for testing
    //setFirstOpen("true"); //for testing purposes
  }, [])

  const submit = async () => {
    await AsyncStorage.set('firstName', firstName);
    await AsyncStorage.set('lastName', lastName);
    await AsyncStorage.set('sex', sexTypes[selectedIndex.row]);
    await AsyncStorage.set('firstOpen', "false");

    navigation.navigate('Menu');
  }

  const onInput = function (stateSetter: any, val: string) {
    stateSetter(val);
  }

  const evaluateFirstOpen = async () => {
    const res = await AsyncStorage.get('firstOpen');
    if (res === "false") {
      navigation.replace('Menu');
    }
    else {
      setFirstOpen("true");
    }
  }

  const _content = (
    <View style={{ ...GlobalStyles.mainContainer, ...styles.container }}>

      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Let's study genetics!</Text>
        <Text style={styles.welcomeText2}>But first, please tell us about you.</Text>
      </View>

      <View style={{ ...GlobalStyles.mainWrapper, ...styles.formWrapper }}>
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
          <Select
            placeholder='Sex'
            value={sexTypes[selectedIndex.row]}
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}
            style={styles.selectBox}>
            <SelectItem title='Male' />
            <SelectItem title='Female' />
          </Select>
          <Button onPress={submit} style={styles.submit}>Submit</Button>
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