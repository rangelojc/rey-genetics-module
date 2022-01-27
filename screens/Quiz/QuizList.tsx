import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Link, useLinkProps } from '@react-navigation/native';

import { Text, Button } from '@ui-kitten/components';

import GlobalStyles from '../../styles/GlobalStyles';
import quizList from '../../assets/quizzes/quizList.json';

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

export default function QuizList(props: any) {
  return (
    <View style={props.style}>
      {
        quizList.map((quiz: any) => {
          return (
            <View style={styles.listItem} key={quiz.name}>
              <Text style={styles.title}>{`${quiz.title}`}</Text>

              <Text style={styles.description}>
                {quiz.description}
              </Text>

              <LinkButton to={`/QuizOpen?quizTitle=${quiz.title}&quizName=${quiz.name}`}>
                Take
              </LinkButton>
            </ View >
          )
        })
      }
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
    elevation: 2,
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