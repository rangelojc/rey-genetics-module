import React, { useEffect, useState } from 'react';

import { StyleSheet, View, Image } from 'react-native';
import { Text } from '@ui-kitten/components';

import Icons from "../components/Icons";
import GlobalStyles from '../styles/GlobalStyles';
import AsyncStorage from "../helpers/AsyncStorage"

const styles = StyleSheet.create({
  container: {
    height: 275,
    backgroundColor: "#ff7072",
    paddingHorizontal: 20,
    marginBottom: -75,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  containerFlat: {
    height: 220,
    backgroundColor: "#ff7072",
    paddingHorizontal: 20,
  },
  avatar: {
    height: 90,
    width: 90,
    marginTop: 20,
    backgroundColor: 'transparent',
    borderRadius: 50,
  },
  textHello: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f1f1f1'
  },
  textName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f1f1f1'
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
        <Image style={styles.avatar} source={require('../assets/images/avatars/avatar1.png')} />
        <Text style={styles.textHello}>Welcome back,</Text>
        <Text style={styles.textName}>{`${firstName}!`}</Text>
      </View>

    </React.Fragment>
  )
}
