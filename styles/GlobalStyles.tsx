import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

// export function MonoText(props: TextProps) {
//     return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
//   }

export const GlobalStyles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: "#e4e6e8"
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: "#f6f6f6"
    },
    background: {
        backgroundColor: "#f6f6f6"
    },
    wrapper: {
        backgroundColor: "#FFFFFF"
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
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    top: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    hyperlink: {
        textDecorationLine: "underline",
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 21
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)' // Modal Backdrop Color
    },
    input: {
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        // borderColor: '#cccccc'
    },
    inputText: {
        height: 32,
        fontSize: 18,
        fontFamily: 'sf-pro-regular'
    },
    fontRegular: {
        fontFamily: 'sf-pro-regular'
    },
    fontMedium: {
        fontFamily: 'sf-pro-medium'
    },
    fontBold: {
        fontFamily: 'sf-pro-bold'
    },
    fontSemiBold: {
        fontFamily: 'sf-pro-semibold'
    },
    statement: {
        fontSize: 14,
        color: "#666666",
        marginTop: 12
    }
});