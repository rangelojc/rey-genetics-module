import React, { Component, useState } from 'react';
import { BackHandler } from 'react-native';

import { Text, TopNavigation, TopNavigationAction, Divider } from '@ui-kitten/components';

import Icons from "../components/Icons";
import GlobalStyles from '../styles/GlobalStyles';

export default function Header(props: any) {
  const [title] = useState(props.title);
  const [backAction] = useState(props.backAction);


  const goBack = () => {
    props.navigation.goBack();
  }

  const BackAction = () => (
    <TopNavigationAction
      icon={Icons.Back}
      onPress={goBack}
    />
  )

  const Title = (evaProps: any) => (
    <Text {...evaProps} style={GlobalStyles.topNavTitle}>{title}</Text>
  )

  const HeaderBar = (props: any) => (
    backAction ?
      <TopNavigation accessoryLeft={BackAction} title={Title} />
      :
      <TopNavigation title={Title} />
  )

  return (
    <React.Fragment>
      <HeaderBar title={title} />
      <Divider />
    </React.Fragment>
  )
}
