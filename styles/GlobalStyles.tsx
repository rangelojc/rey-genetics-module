import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
// import Colors from "../styles/colors.json";

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
    mainContainer: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: "#f6f6f6", //ff7072
    },
    mainWrapper: {
        flex: 1,
        paddingHorizontal: 20,
    },
    mainWrapperView: {
        flex: 1,
        paddingHorizontal: 8,
        marginTop: -100
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
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
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