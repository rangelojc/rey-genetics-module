import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import { StyleSheet, View, Text, Modal, Dimensions, Touchable } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import CoverHeader from "../../components/CoverHeader";

import Quiz1Json from "../../assets/quizzes/quiz_quiz1.json"
import { Button } from '@ui-kitten/components';

import theme from "../../theme/theme.json"
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  startContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 10,
    marginBottom: 20,

    flex: 1,
    justifyContent: "center"
  },
  quizDescription: {
    fontSize: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
    color: "#111"
  },
  btnStart: {
    marginHorizontal: 10,
  },
  quizContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fcfcfc",
    elevation: 4,
    borderRadius: 10,
    marginBottom: 20,

    flex: 1,
  },
  quizHead: {
    display: "flex",
    flexDirection: "row"
  },
  quizNo: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: "#111"
  },
  quizScore: {
    fontSize: 20,
    fontWeight: '400',
    paddingHorizontal: 10,
    color: "#ffc83d",
    marginLeft: "auto"
  },
  quizQuestion: {
    fontSize: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
    color: "#111"
  },
  quizChoiceItem: {
    justifyContent: "center",
    minHeight: 30,
    marginVertical: 5,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#fcfcfc",
    borderWidth: 1,
    borderColor: theme["color-secondary-300"]
  },
  quizChoiceText: {
    fontSize: 16,
    color: "#111"
  },
  quizSubmit: {
    marginVertical: 20,
    borderRadius: 30,
    width: 200,
    alignSelf: "center",
  }
});

const modalStyles = StyleSheet.create({
  backdrop: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "rgba(0,0,0,0.5)",

    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    alignSelf: "center",
    marginVertical: "auto",
    width: Dimensions.get("window").width - 40,
    height: "auto",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 5,
  },
  expText: {
    fontSize: 16,
    color: "#111",
  },
  btnGotIt: {
    marginVertical: 20,
    borderRadius: 30,
    width: 200,
    alignSelf: "center",
  }
});

export default function QuizOpenScreen({ route, navigation }: any) {
  //meta
  const [quizTitle, setQuizTitle] = useState<string>("");
  const [quizName, setQuizName] = useState<string>("");
  const [activeQuiz, setActiveQuiz] = useState<any>({});

  //quiz state
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [quizQuestionNo, setQuizQuestionNo] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<number>(0);

  const [showAnswerModal, setAnswerModal] = useState<boolean>(false);
  const [answerExplanation, setAnswerExplanation] = useState<string>("");

  useEffect(() => {
    setQuizTitle(route.params.params.quizTitle);
    setQuizName(route.params.params.quizName);
  }, [])

  useEffect(() => {
    switch (quizName) {
      case "quiz1": setActiveQuiz(Quiz1Json); break;
    }
  }, [quizName])

  //functions

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizQuestionNo(1);
    setScore(0);
    setSelectedOpt(0);
  }

  const submitAnswer = () => {
    const target: any = activeQuiz.items[quizQuestionNo - 1];
    if (target.answer === selectedOpt) setScore(score + 1);

    setAnswerModal(true);
    setAnswerExplanation(target.explanation);
  }

  const navigate = () => {
    const target: any = activeQuiz.items[quizQuestionNo - 1];

    if (target) {
      setQuizQuestionNo(quizQuestionNo + 1);
      setSelectedOpt(0);
    }
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      <CoverHeader title={quizTitle} navigation={navigation} />

      <View style={GlobalStyles.mainWrapperView}>

        {
          quizStarted === false ?
            <View style={styles.startContainer}>
              <Text style={styles.quizDescription}>{activeQuiz.description}</Text>

              <Button style={styles.btnStart} size="medium" onPress={() => startQuiz()}>Start Quiz</Button>
            </View> : <></>
        }

        {
          quizStarted === true ?
            <View style={styles.quizContainer}>
              <View style={styles.quizHead}>
                <Text style={styles.quizNo}>{quizQuestionNo + "."}</Text>
                <Text style={styles.quizScore}>{"⭐ " + score}</Text>
              </View>

              <Text style={styles.quizQuestion}>{activeQuiz.items[quizQuestionNo - 1].question}</Text>

              {
                activeQuiz.items[quizQuestionNo - 1].choices.map((choice: any, idx: number) =>
                  <TouchableOpacity key={idx} onPress={() => setSelectedOpt(idx + 1)}>
                    <View style={{
                      ...styles.quizChoiceItem,
                      borderColor: selectedOpt === idx + 1 ? theme["color-primary-500"] : theme["color-secondary-300"],
                    }}>
                      <Text style={{
                        ...styles.quizChoiceText,
                        color: selectedOpt === idx + 1 ? theme["color-primary-500"] : "#111",
                      }}>{`${["A", "B", "C", "D"][idx]}. ${choice}`}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }

              <Button style={styles.quizSubmit} size="medium" disabled={selectedOpt === 0} onPress={() => submitAnswer()}>Submit</Button>

            </View> : <></>
        }

        <Modal visible={showAnswerModal} transparent={true}>
          <View style={modalStyles.backdrop}>
            <View style={modalStyles.container}>
              <Text style={modalStyles.expText}>{answerExplanation}</Text>
              <Button size="medium" onPress={() => { navigate(); setAnswerModal(false); setAnswerExplanation(""); }} style={modalStyles.btnGotIt}>Got it!</Button>
            </View>
          </View>
        </Modal>

      </View>
    </View>
  );
}