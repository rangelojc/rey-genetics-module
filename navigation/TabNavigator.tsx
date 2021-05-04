import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

// Tab Screens
import LessonScreen from "../screens/LessonScreen"
import QuizScreen from "../screens/QuizScreen"
import SettingScreen from "../screens/SettingScreen"
import LessonViewScreen from '../screens/LessonViewScreen';

//Icons
import Icons from "../components/Icons";

// Custom Styles
const styles = StyleSheet.create({
    navigation: {
        height: 60,
        borderTopColor: "#d8d8d8",
        borderTopWidth: .3
    },
    text: {
        marginTop: 4
    }
});

function TabBar({ state, navigation }: any) {
    return (
        <BottomNavigation
            style={styles.navigation}
            appearance='noIndicator'
            selectedIndex={state.index}
            onSelect={index => navigation.navigate(state.routeNames[index])}>

            <BottomNavigationTab icon={Icons.Book} title="Lessons" />
            <BottomNavigationTab icon={Icons.Pen} title="Quizzes" />
            <BottomNavigationTab icon={Icons.Setting} title="Settings" />
        </BottomNavigation>
    )
}

// Tabs Screen Navigation
function TabNavigation() {

    const ScreenOptions = (title: string) => {
        return {
            title,
            headerStyle: {
                backgroundColor: '#eee',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }

    const BottomTab = createBottomTabNavigator();

    return (
        <BottomTab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <BottomTab.Screen name='Lessons' component={LessonScreen} options={ScreenOptions("Lessons")} />
            <BottomTab.Screen name='Quizzes' component={QuizScreen} options={ScreenOptions("Quizzes")} />
            <BottomTab.Screen name='Settings' component={SettingScreen} options={ScreenOptions("Settings")} />

            <BottomTab.Screen name='LessonView' component={LessonViewScreen} options={ScreenOptions("LessonView")} />
        </BottomTab.Navigator>
    )
}


// Rendered output then skips unnecessary rendering
export default React.memo(TabNavigation);