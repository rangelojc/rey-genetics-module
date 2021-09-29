import * as React from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, View, Text, Button } from 'react-native';

import GlobalStyles from "../styles/GlobalStyles";
import { readDirectoryAsync } from 'expo-file-system';

const styles = StyleSheet.create({
})

export default function MenuScreen({ navigation }: any) {
  return (
    <View style={GlobalStyles.mainContainer}>
      <Button
        title="Lessons"
        onPress={() => navigation.navigate('Main', { screen: 'Lessons' })}
      />
      <Button
        title="Activities"
        onPress={() => navigation.navigate('Main', { screen: 'Activities' })}
      />
      <Button
        title="Videos"
        onPress={() => navigation.navigate('Main', { screen: 'Videos' })}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Main', { screen: 'Settings' })}
      />
    </View>
  )
}