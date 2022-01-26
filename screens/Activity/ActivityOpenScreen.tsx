import React, { useEffect, useState } from 'react';
import { useAssets } from 'expo-asset';

import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';

import { StyleSheet, View, Text, Dimensions } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import CoverHeader from "../../components/CoverHeader";
import { Button } from '@ui-kitten/components';

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
    backgroundColor: "transparent",
    height: "100%",
    width: Dimensions.get('window').width - 20,
  },
  btnOpen: {
    marginTop: 10,
    height: 60,
    width: 200,
  },
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
  const [activityName, setActivityName] = useState<string>("")
  const [targetDoc, setTargetDoc] = useState<any>({})

  useEffect(() => {
    setActivityTitle(route.params.params.activityTitle);

    setActivityName(route.params.params.activityName);
    setTargetDoc(docFiles?.find(v => v.name === activityName) || {});
  }, [docFiles])

  useEffect(() => {
    loadFile();
  }, [targetDoc])

  const loadFile = async () => {
    try {
      // const uri: string = `file://assets/activities/${activityName}.pdf`;
      const contentUri: any = await FileSystem.getContentUriAsync(targetDoc.localUri);

      await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
        data: contentUri,
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

          <Button
            onPress={loadFile}
            style={styles.btnOpen}
            size='small'
          >
            Open Again
          </Button>
        </View>
      </View>
    </View>
  );
}