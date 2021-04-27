import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

const { Navigator, Screen } = createStackNavigator();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Root" component={TabNavigator} />
      </Navigator>   
    </NavigationContainer>
  );
}

