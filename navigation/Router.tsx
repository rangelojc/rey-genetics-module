import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LinkingConfiguration from './LinkingConfiguration';
import TabNavigator from './TabNavigator';

const { Navigator, Screen } = createStackNavigator();
export default class Router extends Component {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <NavigationContainer linking={LinkingConfiguration}>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Root" component={TabNavigator} />
        </Navigator>
      </NavigationContainer>
    )
  }
}