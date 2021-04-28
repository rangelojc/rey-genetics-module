import React, {Component} from 'react';

import { Text, View } from '../components/Themed';

import GlobalStyles from "../styles/GlobalStyles";
export default class QuizScreen extends Component{
  constructor(props: any){
    super(props);
  }
 
  public render(){
    return (
      <View style={GlobalStyles.container}>
        <Text>Quiz</Text>
      </View>
    );
  }
}