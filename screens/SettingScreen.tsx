import React from 'react';

import { View, StyleSheet } from 'react-native';

import { Text, Input, Button } from '@ui-kitten/components';

import AsyncStorage from "../helpers/AsyncStorage"
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";
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
    let firstName = await AsyncStorage.get('rgm_firstName', 'User');
    let lastName = await AsyncStorage.get('rgm_lastName', 'User');
    this.setState({ firstName, lastName });
  }

  async setFormInput(key: string, val: string) {
    this.setState({
      formInput: {
        ...this.state.formInput,
        [key]: val,
      }
    });

    this.setState({ applyButtonState: 'hasChange' })
  }

  async applySettings() {
    for (var key in this.state.formInput) {
      this.setState({ [key]: this.state.formInput[key] })
      await AsyncStorage.set('rgm_' + key, this.state.formInput[key]);
    }

    this.setState({ applyButtonState: 'saved' });
  }

  async componentDidMount() {
    await this.initState();
  }

  public render() {
    let applyButton = null;

    switch (this.state.applyButtonState) {
      case "noChange": applyButton = <Button disabled={true} onPress={() => this.applySettings()}>Apply</Button>; break;
      case "hasChange": applyButton = <Button disabled={false} onPress={() => this.applySettings()}>Apply</Button>; break;
      case "saved": applyButton = <Button disabled={true} onPress={() => this.applySettings()}>Applied</Button>; break;
    }

    return (
      <View style={GlobalStyles.mainContainer}>
        <Header title="Settings" />

        <View style={{ ...GlobalStyles.containerWrapper }}>

          <Text>First Name</Text>
          <Input
            placeholder='First Name'
            defaultValue={this.state.firstName}
            style={styles.inputBox}
            onChangeText={val => this.setFormInput('firstName', val)}
          />

          <Text>Last Name</Text>
          <Input
            placeholder='Last Name'
            defaultValue={this.state.lastName}
            style={styles.inputBox}
            onChangeText={val => this.setFormInput('lastName', val)}
          />

          {applyButton}
        </View>
      </View>
    )
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