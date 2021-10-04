import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

import GlobalStyles from "../styles/GlobalStyles";

import Cover from "../components/Cover";

const styles = StyleSheet.create({
  buttons: {
    borderRadius: 5,
    marginBottom: 20,
    // backgroundColor: "#fff",
    // borderColor: "#fff",
    // color: 'black'
    // shadowOffset: { width: 10, height: 10, },
    // shadowColor: 'black',
    // shadowOpacity: 1.0,
    // shadowRadius: 2,
  }
})

export default function MenuScreen({ navigation }: any) {
  return (
    <View style={GlobalStyles.mainContainer}>
      <Cover />

      <View style={GlobalStyles.mainWrapper}>
        <Button style={styles.buttons}
          onPress={() => navigation.navigate('Main', { screen: 'Lessons' })}
        >Lessons</Button>
        <Button style={styles.buttons}
          onPress={() => navigation.navigate('Main', { screen: 'Activities' })}
        >Activities</Button>
        <Button style={styles.buttons}
          onPress={() => navigation.navigate('Main', { screen: 'Videos' })}
        >Videos</Button>
        <Button style={styles.buttons}
          onPress={() => navigation.navigate('Main', { screen: 'Settings' })}
        >Settings</Button>
      </View>
    </View>
  )
}