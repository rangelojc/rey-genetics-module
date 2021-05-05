import React, { Component } from "react";
import { View, Text } from "react-native"

const styles = {
  container: {

  },
  title: {

  }
}
export default class Lesson1 extends Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lesson 1 content</Text>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    );
  }
}