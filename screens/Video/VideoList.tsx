import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Link, useLinkProps } from '@react-navigation/native';

import { Text, Button } from '@ui-kitten/components';

import GlobalStyles from '../../styles/GlobalStyles';
import videoList from '../../assets/videos/videoList.json';

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

export default function VideoList(props: any) {
  let vidCount = 0;
  let vidItems = videoList.map(vid => {
    vidCount++;

    return (
      <View style={styles.listItem} key={vid.name}>
        <Text style={styles.title}>{`${vid.title}`}</Text>

        <Text style={styles.description}>
          {vid.description}
        </Text>

        <LinkButton to={`/VideoOpen?videoTitle=${vid.title}&videoFileName=${vid.name}`}>
          Watch
        </LinkButton>
      </ View >
    )
  });


  return (
    <View style={props.style}>
      {vidItems}
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