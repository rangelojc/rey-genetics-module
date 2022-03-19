import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Link, useLinkProps } from '@react-navigation/native';

import { Text, Button } from '@ui-kitten/components';

import GlobalStyles from '../styles/GlobalStyles';
import refList from '../assets/references/referenceList.json';
import { useAssets } from 'expo-asset';

import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';

import Cover from "../components/Cover";

const LinkButton = ({ to, children }: any) => {
  const { onPress } = useLinkProps({ to });

  return (
    <Button
      onPress={onPress}
      style={styles.btnOpen}
      size='small'
    >
      {children}
    </Button>
  )

}

export default function ActivityList(props: any) {

  const [docFiles] = useAssets(
    [
      require('../assets/references/ref1.pdf'),
      require('../assets/references/ref2.pdf'),
    ]
  );

  const [targetDoc, setTargetDoc] = useState<any>({})

  useEffect(() => {
    loadFile();
  }, [targetDoc])

  const onPress = (name: string) => {
    setTargetDoc(docFiles?.find(v => v.name === name) || {});
  }

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

  //sub render

  let refCount = 0;
  let refItems = refList.map(act => {
    refCount++;
    return (
      <View style={styles.listItem} key={act.name}>
        <Text style={styles.title}>{`${act.title}`}</Text>

        <Text style={styles.description}>
          {act.description}
        </Text>

        <Button onPress={() => { onPress(act.name) }} style={styles.btnOpen} size='small'>Open</Button>
      </ View >
    )
  });

  return (
    <ScrollView style={GlobalStyles.mainContainer}>
      <Cover navigation={props.navigation} type="" />

      <View style={GlobalStyles.mainWrapper}>
        <View style={props.style}>
          {refItems}
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    justifyContent: "center",
    minHeight: 90,
    backgroundColor: "#ffffff",
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 5,
    elevation: 2,
  },
  title: {
    ...GlobalStyles.text,
    fontSize: 22,
    fontWeight: "500",
  },
  description: {
    ...GlobalStyles.text,
    color: "#949292"
  },
  btnOpen: {
    marginTop: 10,
    width: 100,
    alignSelf: "flex-end"
  },
})