import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import GlobalStyles from "../styles/GlobalStyles";

import HTMLViewer from '../components/HTMLViewer';
import LessonList from '../components/LessonList';
export default class LessonScreen extends Component{
  constructor(props: any){
    super(props);
  }
 
  public render(){
    return (
      <View style={GlobalStyles.container}>
        <Text>Lessons</Text>
        <LessonList></LessonList>
      </View>
    );
  }
}