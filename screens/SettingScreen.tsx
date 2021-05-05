import React, { Component } from 'react';

import { Text, View } from 'react-native';

import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";

export default class SettingScreen extends Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <View style={GlobalStyles.mainContainer}>
        <Header title="Settings" />

        <View style={GlobalStyles.container}>
        </View>
      </View>
    );
  }
}