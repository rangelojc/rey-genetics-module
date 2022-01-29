import React, { useEffect, useState } from 'react';

import { StyleSheet, View, Image, ImageBackground, Dimensions, StatusBar, Platform } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

import Icons from "../components/Icons";
import GlobalStyles from '../styles/GlobalStyles';
import AsyncStorage from "../helpers/AsyncStorage"

import theme from "../theme/theme.json";

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    position: "relative",
    height: 300,
    paddingHorizontal: 20,
    marginBottom: -90,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: theme['color-primary-500'],
    overflow: 'hidden',
  },
  containerFlat: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    position: "relative",
    height: 220,
    paddingHorizontal: 20,
    backgroundColor: theme['color-primary-500'],
    overflow: 'hidden',
  },
  avatar: {
    height: 60,
    alignSelf: "flex-end",
    width: 60,
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: 'transparent',
    borderRadius: 50,
  },
  textHello: {
    fontSize: 16,
    fontWeight: '300',
    color: '#f1f1f1',
    textAlign: "left",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
    // backgroundColor: "rgba(0,0,0,0.1)",
  },
  textName: {
    fontSize: 12,
    fontWeight: '400',
    color: '#f1f1f1',
    textAlign: "right",
    marginRight: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
    // backgroundColor: "rgba(0,0,0,0.1)"
  },
  setting: {
    position: "absolute",
    top: 10,
    right: 10,
    height: 10,
    width: 10
  },
  menuButton: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 8,
    borderColor: 'transparent',
    backgroundColor: "rgba(0,0,0,0.3)"
  },
})

const polkaStyles = StyleSheet.create({
  polka1: {
    position: "absolute",
    zIndex: -1,
    top: -20, left: -30,
    height: 300,
    width: 200,
    borderTopRightRadius: 200,
    borderBottomRightRadius: 200,
    backgroundColor: theme['color-primary-600']
  },
  polka2: {
    position: "absolute",
    zIndex: -2,
    bottom: -40, right: 0,
    height: 200,
    width: 200,
    borderTopLeftRadius: 250,
    borderBottomLeftRadius: 0,
    backgroundColor: 'rgba(255,255,255,0)'
  },
  polka3: {
    position: "absolute",
    zIndex: -3,
    top: -220, right: -150,
    height: 350,
    width: 290,
    borderRadius: 150,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  polkaMenu1: {
    position: "absolute",
    zIndex: -2,
    top: -100, left: -20,
    height: 150,
    width: 300,
    borderBottomRightRadius: 400,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  polkaMenu2: {
    position: "absolute",
    zIndex: -2,
    bottom: -100, right: -20,
    height: 150,
    width: 300,
    borderTopLeftRadius: 400,
    backgroundColor: theme['color-primary-600']
  },
})

const PolkaDots = (props: any) => {
  return (
    <>
      {/* design polka dots */}
      {
        props.menu ?
          <>
            <View style={polkaStyles.polkaMenu1}></View>
            <View style={polkaStyles.polkaMenu2}></View></>
          :
          (<>
            <View style={polkaStyles.polka1}></View>
            <View style={polkaStyles.polka2}></View>
            <View style={polkaStyles.polka3}></View>
          </>)
      }
    </>
  )
}

export default function Cover(props: any) {
  const [firstName, setFirstName]: any = React.useState('');
  const [lastName, setLastName]: any = React.useState('');
  const [sex, setSex]: any = React.useState<string>('');

  useEffect(() => {
    initState();
  }, [])

  const initState = async function () {
    let fn: any = await AsyncStorage.get('firstName');
    let ln: any = await AsyncStorage.get('lastName');
    let s: any = await AsyncStorage.get('sex');

    setFirstName(fn);
    setLastName(ln);
    setSex(s);
  }

  const goToMenu = function () {
    props.navigation.replace('Menu');
  }

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Image source={require('../assets/images/bg1.jpg')} resizeMode="cover" style={GlobalStyles.headerBG}>
        </Image>

        {/* <Icons.Setting fill='#fff' styles={styles.setting}
          onPress={() => { props.navigation.navigate('Settings') }}
        /> */}
        {sex === "Male" ? <Image style={styles.avatar} source={require('../assets/images/avatars/male.png')} />
          : <Image style={styles.avatar} source={require('../assets/images/avatars/female.png')} />
        }

        {/* <Text style={styles.textHello}>Greetings,</Text> */}
        {/* <Text style={styles.textName}>{`${firstName} ${lastName.charAt(0)}.`}</Text> */}

        <Button style={styles.menuButton} accessoryLeft={Icons.Home}
          onPress={goToMenu}>{""}</Button>

      </View>
    </React.Fragment>
  )
}
