import * as React from 'react';

import { StyleSheet, View, TouchableOpacity, ScrollView, BackHandler, Dimensions, Image } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

import theme from "../theme/theme.json";
import GlobalStyles from "../styles/GlobalStyles";

import CoverMenu from "../components/CoverMenu";
import Icons from '../components/Icons';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: theme["color-secondary-200"],
    height: Dimensions.get("window").height - 220,
  },
  menuItem: {
    width: '100%',
    marginBottom: 10,
    height: 70,
    backgroundColor: "#fff",
    elevation: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
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
    minHeight: 100,
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
    <ScrollView style={GlobalStyles.mainContainer}>
      <CoverMenu menu="true" navigation={navigation} />

      <View style={{ ...GlobalStyles.mainWrapper, ...styles.container }}>
        <Image source={require('../assets/images/bg.jpg')} resizeMode="cover" style={GlobalStyles.mainBG}>
        </Image>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigate("Lessons") }}>
            <View style={styles.menuIcon}>
              <Icons.Book fill={theme['color-primary-500']} style={styles.menuIconImg} />
            </View>
            <View>
              <Text style={styles.menuTitle}>Lessons</Text>
              <Text style={styles.menuDesc}>Study any available lessons.</Text>
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
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigate("Activities") }}>
            <View style={styles.menuIcon}>
              <Icons.Pen fill={theme['color-primary-500']} style={styles.menuIconImg} />
            </View>
            <View>
              <Text style={styles.menuTitle}>Activities</Text>
              <Text style={styles.menuDesc}>View learning tasks documents.</Text>
            </View>
          </TouchableOpacity >
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigate("Quizzes") }}>
            <View style={styles.menuIcon}>
              <Icons.BookOpen fill={theme['color-primary-500']} style={styles.menuIconImg} />
            </View>
            <View>
              <Text style={styles.menuTitle}>Quizzes</Text>
              <Text style={styles.menuDesc}>Take an assessment.</Text>
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
        </View>
      </View>
    </ScrollView >
  )
}