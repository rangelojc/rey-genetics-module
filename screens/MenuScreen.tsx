import * as React from 'react';

import { StyleSheet, View, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

import theme from "../theme/theme.json";
import GlobalStyles from "../styles/GlobalStyles";

import Cover from "../components/Cover";
import Icons from '../components/Icons';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  menuItem: {
    width: '100%',
    marginBottom: 10,
    height: 70,
    backgroundColor: '#fff',
    elevation: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
  },
  menuIconImg: {
    height: 30,
    width: 30
  },
  menuTitle: {
    color: theme['color-primary-500'],
    fontWeight: 'bold'
  },
  menuDesc: {
    color: '#8a8a8a',
    fontSize: 13
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 4,
    height: 100,
  },
  buttons: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: "transparent",
    elevation: 0,
  },
})

export default function MenuScreen({ navigation }: any) {
  const navigate = (target: string) => {
    if (target === 'Settings') navigation.navigate(target);
    else if (target === 'Close') BackHandler.exitApp()
    else navigation.navigate('Main', { screen: target });
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      <Cover menu="true" navigation={navigation} />

      <View style={{ ...GlobalStyles.mainWrapper, ...styles.container }}>

        <ScrollView style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigate("Lessons") }}>
            <View style={styles.menuIcon}>
              <Icons.Book fill={theme['color-primary-500']} style={styles.menuIconImg} />
            </View>
            <View>
              <Text style={styles.menuTitle}>Lessons</Text>
              <Text style={styles.menuDesc}>Study any available lessons.</Text>
            </View>
          </TouchableOpacity >
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigate("Activities") }}>
            <View style={styles.menuIcon}>
              <Icons.Pen fill={theme['color-primary-500']} style={styles.menuIconImg} />
            </View>
            <View>
              <Text style={styles.menuTitle}>Activities</Text>
              <Text style={styles.menuDesc}>Take an assessment.</Text>
            </View>
          </TouchableOpacity >
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigate("Videos") }}>
            <View style={styles.menuIcon}>
              <Icons.Video fill={theme['color-primary-500']} style={styles.menuIconImg} />
            </View>
            <View>
              <Text style={styles.menuTitle}>Videos</Text>
              <Text style={styles.menuDesc}>Watch videos included in the lessons.</Text>
            </View>
          </TouchableOpacity >
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigate("Settings") }}>
            <View style={styles.menuIcon}>
              <Icons.Setting fill={theme['color-primary-500']} style={styles.menuIconImg} />
            </View>
            <View>
              <Text style={styles.menuTitle}>Settings</Text>
              <Text style={styles.menuDesc}>Configure the application.</Text>
            </View>
          </TouchableOpacity >
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigate("Close") }}>
            <View style={styles.menuIcon}>
              <Icons.Minimize fill={theme['color-primary-500']} style={styles.menuIconImg} />
            </View>
            <View>
              <Text style={styles.menuTitle}>Close</Text>
              <Text style={styles.menuDesc}>Minimize the application.</Text>
            </View>
          </TouchableOpacity >
        </ScrollView>
      </View>
    </View >
  )
}