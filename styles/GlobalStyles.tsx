import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

/*
Sidecar
#F5E3C9

Dingley
#728544

Hippie Blue
#4B9FA5

Brandy Rose
#B68071
*/

import theme from "../theme/theme.json"

export default StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: "#e4e6e8"
    },
    bottomNavigation: {
        height: 60,
        minHeight: 60,
        borderTopColor: "#d8d8d8",
        borderTopWidth: .3,
    },
    headerBG: {
        width: Dimensions.get("window").width,
        height: "100%",
        position: 'absolute',
        zIndex: -1,
        top: 0,
        opacity: 0.5
    },
    mainBG: {
        width: Dimensions.get("window").width,
        height: "110%",
        position: 'absolute',
        zIndex: 0,
        top: 0,
        opacity: 0.7
    },
    mainContainer: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: theme["color-secondary-200"], //ff7072
    },
    mainWrapper: {
        flex: 1,
        paddingHorizontal: 20,
        // backgroundColor: theme["color-secondary-200"]
    },
    mainWrapperView: {
        flex: 1,
        paddingHorizontal: 8,
        marginTop: -90,

    },
    container: {
        flex: 1,
        paddingHorizontal: 0,
        paddingVertical: 0,
        backgroundColor: "#f6f6f6"
    },
    title: {
        height: 40,
        minHeight: 40,
        maxHeight: 40,
        marginBottom: 1,
        fontSize: 28,
        fontWeight: "bold",
        backgroundColor: "#ffffff",
        color: "#141414"
    },
    topNavTitle: {
        fontSize: 28,
        fontWeight: "bold",
        backgroundColor: "#ffffff",
        color: "#141414",
        paddingLeft: 10,
    },
    text: {
        fontSize: 16,
        color: "#141414"
    },
    safearea: {
        flex: 1,
        backgroundColor: theme["color-primary-500"],
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    scrollable: {
        height: Dimensions.get('window').height - 82
    },
    scrollableWithHeader: {
        height: Dimensions.get('window').height - 132
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    flex: {
        flex: 1
    },
    end: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    top: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
});