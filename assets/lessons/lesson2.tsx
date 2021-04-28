import React, {Component} from "react";
import {View, Text} from "react-native"

const styles = {
    container: {

    },
    title: {

    }
}
export default class Lesson2 extends Component{
    constructor(props: any){
      super(props);
    }
   
    public render(){
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Lesson 2 content</Text>
        </View>
      );
    }
  }