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
class TabBar extends Component {
    navigation: any;
    state: any;

    constructor(props: any) {
        super(props);

        this.navigation = props.navigation;
        this.state = props.state;
    }

    public render() {
        return (
            <BottomNavigation
                style={styles.navigation}
                appearance='noIndicator'
                selectedIndex={this.state.index}
                onSelect={index => this.navigation.navigate(this.state.routeNames[index])}>

                <BottomNavigationTab icon={Icons.Book} title="Lessons" />
                <BottomNavigationTab icon={Icons.Pen} title="Quizzes" />
                <BottomNavigationTab icon={Icons.Setting} title="Settings" />
            </BottomNavigation>
        )
    }
}

// Tabs Screen Navigation
class TabNavigation extends Component {
    constructor(props: any) {
        super(props)
    }

    public render() {
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

        const { Navigator, Screen } = createBottomTabNavigator();

        return (
            <Navigator tabBar={(props) => <TabBar {...props} />}>
                <Screen name='Lessons' component={LessonScreen} options={ScreenOptions("Lessons")} />
                <Screen name='Quizzes' component={QuizScreen} options={ScreenOptions("Quizzes")} />
                <Screen name='Settings' component={SettingScreen} options={ScreenOptions("Settings")} />

                <Screen name='LessonView' component={LessonViewScreen} options={ScreenOptions("LessonView")} />
            </Navigator>
        )
    }
}


// Rendered output then skips unnecessary rendering
export default React.memo(TabNavigation);