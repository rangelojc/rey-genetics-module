import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Link, useLinkProps } from '@react-navigation/native';

import { Text, Button } from '@ui-kitten/components';

import GlobalStyles from '../../styles/GlobalStyles';
import activityList from '../../assets/activities/activityList.json';

const LinkButton = ({ to, children }: any) => {
  const { onPress } = useLinkProps({ to });

  return (
    <Button
      onPress={onPress}
      style={styles.btnOpen}
      size='small'
    >
      {children}
    </Button>
  )

}

export default function ActivityList(props: any) {
  let actCount = 0;
  let actItems = activityList.map(act => {
    actCount++;

    return (
      <View style={styles.listItem} key={act.name}>
        <Text style={styles.title}>{`${act.title}`}</Text>

        <Text style={styles.description}>
          {act.description}
        </Text>

        <LinkButton to={`/ActivityOpen?activityTitle=${act.title}`}>
          Take
        </LinkButton>
      </ View >
    )
  });



  return (
    <View style={props.style}>
      {actItems}
    </View>
  )
}


const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    justifyContent: "center",
    minHeight: 90,
    backgroundColor: "#ffffff",
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 5,
    shadowColor: '#171717',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    ...GlobalStyles.text,
    fontSize: 22,
    fontWeight: "500",
  },
  description: {
    ...GlobalStyles.text,
    color: "#949292"
  },
  btnOpen: {
    marginTop: 10,
    width: 100,
    alignSelf: "flex-end"
  },
})