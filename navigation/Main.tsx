import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import GlobalStyles from "../styles/GlobalStyles";

// Tab Screens
import LessonScreen from "../screens/Lesson/LessonScreen"
import ActivityScreen from "../screens/Activity/ActivityScreen"
import VideoScreen from "../screens/Video/VideoScreen"

//Icons
import Icons from "../components/Icons";

function TabBar({ state, navigation }: any) {
    return (
        <BottomNavigation
            style={GlobalStyles.bottomNavigation}
            appearance="noIndicator"
            selectedIndex={state.index}
            onSelect={
                index => {
                    navigation.navigate(state.routeNames[index]);
                }
            }>

            <BottomNavigationTab icon={Icons.Book} title="Lessons" />
            <BottomNavigationTab icon={Icons.Pen} title="Activities" />
            <BottomNavigationTab icon={Icons.Video} title="Videos" />
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
        <BottomTab.Navigator tabBar={(props) => <TabBar {...props} />}  >
            <BottomTab.Screen name='Lessons' component={LessonScreen} options={ScreenOptions("Lessons")} />
            <BottomTab.Screen name='Activities' component={ActivityScreen} options={ScreenOptions("Activities")} />
            <BottomTab.Screen name='Videos' component={VideoScreen} options={ScreenOptions("Videos")} />
        </BottomTab.Navigator>
    )
}


// Rendered output then skips unnecessary rendering
export default React.memo(TabNavigation);