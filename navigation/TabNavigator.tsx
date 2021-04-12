import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

// Components
import CustomText from '../components/primitive/CustomText';

// Tabs Screens
import LessonScreen from "../screens/LessonScreen"
import QuizScreen from "../screens/QuizScreen"
import SettingScreen from "../screens/SettingScreen"

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

const { Navigator, Screen } = createBottomTabNavigator();

// Bottom Navigations
const TabBar = ({ navigation, state }: any) => (
    <BottomNavigation
        style={styles.navigation}
        appearance='noIndicator'
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab
            title={() => <CustomText text="Lessons" style={styles.text} />}
            icon={state.routeNames[state.index] === "TYPE" ? "" : ""} />
        <BottomNavigationTab
            title={() => <CustomText text="Quizzes" style={styles.text} />}
            icon={state.routeNames[state.index] === "TYPE" ? "" : ""} />
        <BottomNavigationTab
            title={() => <CustomText text="Settings" style={styles.text} />}
            icon={state.routeNames[state.index] === "TYPE" ? "" : ""} />
    </BottomNavigation>
);

// Tabs Screen Navigations
const TabNavigation = () => (
    <Navigator tabBar={(props) => <TabBar {...props} />}>
        <Screen name='Lessons' component={LessonScreen} />
        <Screen name='Quizzes' component={QuizScreen} />
        <Screen name='Settings' component={SettingScreen} />
    </Navigator>
);

// Rendered output then skips unnecessary rendering
export default React.memo(TabNavigation);