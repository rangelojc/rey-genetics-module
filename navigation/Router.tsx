import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaView } from 'react-native'

import LinkingConfiguration from './LinkingConfiguration';
import GlobalStyles from "../styles/GlobalStyles";

//Screens
import Main from './Main';
import LessonViewScreen from '../screens/LessonViewScreen';

const Stack = createStackNavigator();
export default class Router extends Component {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <SafeAreaView style={GlobalStyles.safearea}>
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="LessonView" component={LessonViewScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    )
  }
}