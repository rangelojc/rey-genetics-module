import React, { useEffect, useState } from 'react';

import { StyleSheet, View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

import Icons from "./Icons";
import theme from "../theme/theme.json";

const styles = StyleSheet.create({
  container: {
    height: 300,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
    backgroundColor: theme['color-primary-500']
  },
  textLabel: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '300',
    color: '#f1f1f1'
  },
  textHead: {
    fontSize: 20,
    fontWeight: '300',
    color: '#f1f1f1'
  },
  backButton: {
    marginTop: 20,
    width: 50,
    height: 50,
    borderRadius: 8,
    borderColor: 'transparent',
    backgroundColor: "rgba(255,255,255,0.3)"
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
  const navigation = props.navigation;

  const goBack = function () {
    navigation.goBack();
  }

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Button style={styles.backButton} accessoryLeft={Icons.Back}
          onPress={goBack}>{""}</Button>
        <Text style={styles.textLabel}>You are viewing,</Text>
        <Text style={styles.textHead}>{props.title}</Text>
        <PolkaDots />
      </View>
    </React.Fragment>
  )
}
