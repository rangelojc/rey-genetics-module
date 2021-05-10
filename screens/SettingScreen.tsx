import React from 'react';

import { View, StyleSheet } from 'react-native';

import { Text, Input } from '@ui-kitten/components';

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
      firstName: '',
      lastName: ''
    }
  }

  async initState() {
    let firstName = await AsyncStorage.get('rgm_firstName', 'USER');
    let lastName = await AsyncStorage.get('rgm_lastName', '');
    this.setState({ firstName, lastName });
  }

  async setData(key: string, val: string) {
    await AsyncStorage.set(key, val)
    this.setState({ [key]: val });
  }

  public render() {
    return (
      <View style={GlobalStyles.mainContainer}>
        <Header title="Settings" />

        <View style={{ ...GlobalStyles.containerWrapper, ...styles.container }}>

          <Text>First Name</Text>
          <Input
            placeholder='First Name'
            value={this.state.firstName}
            style={styles.inputBox}
            onChangeText={val => this.setData('firstName', val)}
          />

          <Text>Last Name</Text>
          <Input
            placeholder='Last Name'
            value={this.state.lastName}
            style={styles.inputBox}
            onChangeText={val => this.setData('lastName', val)}
          />

        </View>
      </View>
    )
  }

  async componentDidMount() {
    await this.initState();
  }
}

let styles = StyleSheet.create({
  container: {
  },
  inputBox: {
    marginTop: 5,
    marginBottom: 10
  }
})