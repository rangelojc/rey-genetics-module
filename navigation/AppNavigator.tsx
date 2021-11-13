import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaView } from 'react-native'

import LinkingConfiguration from './LinkingConfiguration';
import GlobalStyles from "../styles/GlobalStyles";

//Screens
import Main from './Main';
import LessonViewScreen from '../screens/Lesson/LessonViewScreen';
import ActivityOpenScreen from '../screens/Activity/ActivityOpenScreen';
import VideoOpenScreen from '../screens/Video/VideoOpenScreen';
import StartScreen from '../screens/StartScreen';
import MenuScreen from '../screens/MenuScreen';
import FirstOpenScreen from '../screens/FirstOpenScreen';
import SettingScreen from '../screens/SettingScreen';
import QuizOpenScreen from '../screens/Quiz/QuizOpenScreen';

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
            <Stack.Screen name="FirstOpen" component={FirstOpenScreen} />
            {/* <Stack.Screen name="Start" component={StartScreen} /> */}
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="LessonView" component={LessonViewScreen} />
            <Stack.Screen name="ActivityOpen" component={ActivityOpenScreen} />
            <Stack.Screen name="QuizOpen" component={QuizOpenScreen} />
            <Stack.Screen name="VideoOpen" component={VideoOpenScreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    )
  }
}