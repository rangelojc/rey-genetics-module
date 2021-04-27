import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

// Components
import CustomText from '../components/primitive/CustomText';

// Tab Screens
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

//Icons
const Icons = {
    Book: (props: any) => <Icon name='book-outline' {...props} />,
    Setting: (props: any) => <Icon name='settings-outline' {...props} />,
    Pen:  (props: any) => <Icon name='edit-outline' {...props} />,
}

// Bottom Navigations
const TabBar = ({ navigation, state }: any) => (
    <BottomNavigation
        style={styles.navigation}
        appearance='noIndicator'
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab icon={Icons.Book} title="Lessons"/>
        <BottomNavigationTab icon={Icons.Setting} title="Quizzes" />
        <BottomNavigationTab icon={Icons.Pen} title="Settings" />
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