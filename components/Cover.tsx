import React, { useEffect, useState } from 'react';

import { StyleSheet, View, Image } from 'react-native';
import { Text, withStyles } from '@ui-kitten/components';

import Icons from "../components/Icons";
import GlobalStyles from '../styles/GlobalStyles';
import AsyncStorage from "../helpers/AsyncStorage"

import theme from "../theme/theme.json";


const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 300,
    paddingHorizontal: 20,
    marginBottom: -100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: theme['color-primary-500'],
    overflow: 'hidden',
  },
  containerFlat: {
    position: "relative",
    height: 220,
    paddingHorizontal: 20,
    backgroundColor: theme['color-primary-500'],
    overflow: 'hidden',
  },
  polka1: {
    position: "absolute",
    zIndex: -1,
    top: -100, right: 0,
    height: 200,
    width: 260,
    borderTopLeftRadius: 200,
    borderBottomLeftRadius: 200,
    backgroundColor: theme['color-primary-600']
  },
  polka2: {
    position: "absolute",
    zIndex: -2,
    bottom: -100, left: 0,
    height: 200,
    width: 320,
    borderTopRightRadius: 200,
    borderBottomRightRadius: 200,
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  avatar: {
    height: 90,
    width: 90,
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: 'transparent',
    borderRadius: 50,
  },
  textHello: {
    fontSize: 30,
    fontWeight: '300',
    color: '#f1f1f1'
  },
  textName: {
    fontSize: 30,
    fontWeight: '400',
    color: '#f1f1f1'
  },
  setting: {
    position: "absolute",
    top: 10,
    right: 10,
    height: 10,
    width: 10
  }
})

export default function Cover(props: any) {
  const [firstName, setFirstName]: any = React.useState('');
  const [lastName, setLastName]: any = React.useState('');

  const initState = async function () {
    let fn: any = await AsyncStorage.get('firstName');
    let ln: any = await AsyncStorage.get('lastName');

    setFirstName(fn);
    setLastName(ln);
  }

  useEffect(() => {
    initState();
  }, [])


  return (
    <React.Fragment>
      <View style={props.flat ? styles.containerFlat : styles.container}>
        {/* <Icons.Setting fill='#fff' styles={styles.setting}
          onPress={() => { props.navigation.navigate('Settings') }}
        /> */}
        <Image style={styles.avatar} source={require('../assets/images/avatars/avatar1.png')} />
        <Text style={styles.textHello}>Greetings,</Text>
        <Text style={styles.textName}>{`${firstName}!`}</Text>

        <View style={styles.polka1}></View>
        <View style={styles.polka2}></View>
      </View>
    </React.Fragment>
  )
}
