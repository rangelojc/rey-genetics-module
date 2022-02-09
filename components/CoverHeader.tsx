import React, { useEffect, useState } from 'react';

import { Image, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

import AsyncStorage from "../helpers/AsyncStorage"

import Icons from "./Icons";
import theme from "../theme/theme.json";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    height: 300,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    backgroundColor: theme['color-primary-500']
  },
  textLabel: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '300',
    color: '#f1f1f1'
  },
  textHead: {
    fontSize: 24,
    fontWeight: '300',
    color: '#f1f1f1'
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 8,
    borderColor: 'transparent',
    backgroundColor: "rgba(255,255,255,0.3)"
  },
  avatar: {
    height: 60,
    alignSelf: "flex-end",
    width: 60,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: 'transparent',
    borderRadius: 50,
  },
})

const polkaStyles = StyleSheet.create({
  polka1: {
    position: "absolute",
    zIndex: -2,
    top: -100, left: 0,
    height: 250,
    width: 100,
    borderTopRightRadius: 150,
    borderBottomRightRadius: 200,
    backgroundColor: theme['color-primary-600']
  },
  polka2: {
    position: "absolute",
    zIndex: -2,
    bottom: -60, right: 0,
    height: 330,
    width: 200,
    borderTopLeftRadius: 300,
    borderBottomLeftRadius: 100,
    backgroundColor: "rgba(255,255,255,0.3)"
  },
})

const PolkaDots = () => {
  return (
    <>
      <View style={polkaStyles.polka1}></View>
      <View style={polkaStyles.polka2}></View>
    </>
  )
}

export default function CoverHeader(props: any) {

  const [sex, setSex]: any = React.useState<string>('');


  useEffect(() => {
    initState();
  }, [])

  const initState = async function () {
    let s: any = await AsyncStorage.get('sex');
    setSex(s);
  }

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Button style={styles.backButton} accessoryLeft={Icons.Back}
          onPress={props.navigation.goBack}>{""}</Button>

        {sex === "Male" ? <Image style={styles.avatar} source={require('../assets/images/avatars/male.png')} />
          : <Image style={styles.avatar} source={require('../assets/images/avatars/female.png')} />
        }

        <Text style={styles.textLabel}>You are viewing,</Text>
        <Text style={styles.textHead}>{props.title}</Text>
        <PolkaDots />
      </View>
    </React.Fragment>
  )
}
