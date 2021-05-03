import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

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