import React from 'react';

import { View, StyleSheet } from 'react-native';

import { Text, Input, Button } from '@ui-kitten/components';

import AsyncStorage from "../helpers/AsyncStorage"
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";

async function getUser() {
  let user = await AsyncStorage.get('rgm_USERNAME', 'USER');
  if (user) return user;
}

export default class SettingScreen extends React.Component {
  state: any;

  constructor(props: any) {
    super(props);

    this.state = {
      formInput: {
        firstName: '',
        lastName: ''
      },
      applyButtonState: 'noChange', //noChange, hasChange, saved
      firstName: '',
      lastName: ''
    }
  }

  async initState() {
    let firstName = await AsyncStorage.get('rgm_firstName', 'USER');
    let lastName = await AsyncStorage.get('rgm_lastName', '');
    this.setState({ firstName, lastName });
  }

  async setFormInput(key: string, val: string) {
    await AsyncStorage.set(key, val)
    this.setState({
      formInput: {
        ...this.state.formInput,
        [key]: val,
      }
    });

    this.setState({ applyButtonState: 'hasChange' })
  }

  async applySettings() {
    this.state.formInput.keys.forEach((key: any) => {
      this.setState({ [key]: this.state.formInput[key] })
    })

    this.setState({ applyButtonState: 'saved' })
  }

  public render() {
    let applyButton = null;

    switch (this.state.applyButtonState) {
      case "noChange": applyButton = <Button disabled={true}>Apply</Button>; break;
      case "hasChange": applyButton = <Button disabled={false}>Apply</Button>; break;
      case "saved": applyButton = <Button disabled={true}>Applied</Button>; break;
    }

    return (
      <View style={GlobalStyles.mainContainer}>
        <Header title="Settings" />

        <View style={{ ...GlobalStyles.containerWrapper }}>

          <Text>First Name</Text>
          <Input
            placeholder='First Name'
            value={this.state.firstName}
            style={styles.inputBox}
            onChangeText={val => this.setFormInput('firstName', val)}
          />

          <Text>Last Name</Text>
          <Input
            placeholder='Last Name'
            value={this.state.lastName}
            style={styles.inputBox}
            onChangeText={val => this.setFormInput('lastName', val)}
          />

          {applyButton}

        </View>
      </View>
    )
  }

  async componentDidMount() {
    await this.initState();
  }
}

let styles = StyleSheet.create({
  inputBox: {
    marginTop: 5,
    marginBottom: 10
  },
  applyButton: {
    marginTop: 20
  }
})