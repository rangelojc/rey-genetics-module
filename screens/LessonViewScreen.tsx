import React, {Component} from 'react';

import { Text, View } from '../components/Themed';

import GlobalStyles from "../styles/GlobalStyles";
export default class LessonViewScreen extends Component{
  constructor(props: any){
    super(props);
    
  }
 
  public render(){
    return (
      <View style={GlobalStyles.container}>
        <Text>Lesson View</Text>
      </View>
    );
  }
}