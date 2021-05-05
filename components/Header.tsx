import React, { Component, useEffect } from 'react';
import { BackHandler } from 'react-native';

import { Text, TopNavigation, TopNavigationAction, Divider } from '@ui-kitten/components';

import Icons from "../components/Icons";
import GlobalStyles from '../styles/GlobalStyles';




interface HeaderProps {
  title: string,
  backAction?: string,
  navigation?: any
}

export default class Header extends Component<HeaderProps> {
  backAction: boolean;
  title: string;
  navigation: any;

  constructor(props: any) {
    super(props);

    //this.navigation = props.navigation;
    this.title = props.title;
    this.backAction = props.backAction === "true" ? true : false;
  }

  public render() {

    const BackAction = () => (
      <TopNavigationAction
        icon={Icons.Back}
        onPress={() => console.log("Back button pressed")}
      />
    )

    const Title = (evaProps: any) => (
      <Text {...evaProps} style={GlobalStyles.topNavTitle}>{this.title}</Text>
    )

    const HeaderBar = (props: any) => (
      this.backAction ?
        <TopNavigation accessoryLeft={BackAction} title={Title} />
        :
        <TopNavigation title={Title} />
    )

    return (
      <React.Fragment>
        <HeaderBar title={this.title} />
        <Divider />
      </React.Fragment>
    )
  }

}