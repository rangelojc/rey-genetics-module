import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';

import { StyleSheet, View, Text } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import CoverHeader from "../../components/CoverHeader";
import { WebView } from 'react-native-webview';
import { useAssets } from 'expo-asset';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    // backgroundColor: '#fff',
    // elevation: 4,
    borderRadius: 10,
    marginBottom: 20,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
    width: "100%"
  },
  webView: {
    backgroundColor: "#fff",
    height: "100%",
    width: 370
  }
})

export default function ActivityScreen({ route, navigation }: any) {
  const [docFiles] = useAssets(
    [
      require('../../assets/activities/activity1.pdf'),
      require('../../assets/activities/activity2.pdf'),
      require('../../assets/activities/activity3.pdf'),
      require('../../assets/activities/activity4.pdf'),
    ]
  );

  const [activityTitle, setActivityTitle] = useState<string>("")

  useEffect(() => {
    setActivityTitle(route.params.params.activityTitle);

    const activityName: string = route.params.params.activityName;
    const targetDoc: any = docFiles?.find(v => v.name === activityName) || {};

    const uri: string = `../../assets/activities/${activityName}.pdf`;
    loadFile(uri, targetDoc);

  }, [])

  const loadFile = async (uri: string, doc: any) => {
    try {
      const cUri: any = await FileSystem.getContentUriAsync(uri);

      await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
        data: cUri,
        flags: 1,
        type: 'application/pdf'
      });
    } catch (e: any) {
      console.log(e.message);
    }
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      <CoverHeader title={activityTitle} navigation={navigation} />

      <View style={GlobalStyles.mainWrapperView}>
        <View style={styles.container}>

          {/* <WebView
            source={{ uri: `http://www.pscgames.co.uk/wp-content/uploads/2015/01/MILITO_RULEBOOK.pdf` }}
            startInLoadingState={true} style={styles.webView} /> */}
        </View>
      </View>
    </View>
  );
}