import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import HTMLViewer from '../components/HTMLViewer';
import LessonList from '../components/LessonList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  },
  title: {
  },
});

export default class LessonScreen extends Component{
  constructor(props: any){
    super(props);
  }
 
  public render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lessons</Text>
        <LessonList></LessonList>
      </View>
    );
  }
}