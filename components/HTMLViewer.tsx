import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const styles =  StyleSheet.create({
    view: {
        flex: 1,
    },
    webView: {
        flex: 1,
        // height: Dimensions.get("window").height,
        // width: Dimensions.get("window").width
    }
});

const staticHtml = require('../assets/lessons/lesson1.tsx').default;

export default function HTMLViewer(props: any){
    const {fileName} = props;
    const relativePath = `../assets/lessons/${fileName}.html`;

    return(
       <View style={styles.view}>
            <WebView
                automaticallyAdjustContentInsets={false}
                originWhitelist={["*"]}
                source={ { html: relativePath, baseUrl: ''} }
                style={styles.webView}
                scalesPageToFit={true}
            />
       </View>
    )
}