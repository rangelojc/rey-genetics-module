import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

import GlobalStyles from "../styles/GlobalStyles";

import Cover from "../components/Cover";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 4,
    height: 100,
  },
  buttons: {
    flex: 1,
    height: '100%',
    width: '45%',
    marginHorizontal: 2,
    borderRadius: 5,
    backgroundColor: "#ff7072",
    borderColor: "transparent"
    // shadowOffset: { width: 10, height: 10, },
    // shadowColor: 'black',
    // shadowOpacity: 1.0,
    // shadowRadius: 2,
  },
  buttonText: {
    color: "#202020"
  }
})

export default function MenuScreen({ navigation }: any) {
  return (
    <View style={GlobalStyles.mainContainer}>
      <Cover flat="true" navigation={navigation} />

      <View style={{ ...GlobalStyles.mainWrapper, ...styles.container }}>

        <View style={styles.buttonWrapper}>
          <Button style={styles.buttons} status='primary'
            onPress={() => navigation.navigate('Main', { screen: 'Lessons' })}
          >Lessons</Button>
          <Button style={styles.buttons} status='primary'
            onPress={() => navigation.navigate('Main', { screen: 'Activities' })}
          >Activities</Button>
        </View>

        <View style={styles.buttonWrapper}>
          <Button style={styles.buttons} status='primary'
            onPress={() => navigation.navigate('Main', { screen: 'Videos' })}
          >Videos</Button>
          <Button style={styles.buttons} status='primary'
            onPress={() => navigation.navigate('Settings')}
          >Settings</Button>
        </View>



      </View>
    </View>
  )
}