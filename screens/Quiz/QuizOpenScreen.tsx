import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import { StyleSheet, View, Text, Modal, Dimensions, Touchable, ScrollView } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import CoverHeader from "../../components/CoverHeader";

import Quiz1Json from "../../assets/quizzes/quiz_quiz1.json"
import Quiz2Json from "../../assets/quizzes/quiz_quiz2.json"
import Quiz3Json from "../../assets/quizzes/quiz_quiz3.json"
import Quiz4Json from "../../assets/quizzes/quiz_quiz4.json"

import { Button } from '@ui-kitten/components';

import theme from "../../theme/theme.json"
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from '../../components/Icons';

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
    flexDirection: "row",
    alignItems: "center"
  },
  quizNo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 2,
    color: "#111"
  },
  quizNoTotal: {
    paddingTop: 6,
    fontSize: 14,
    color: "#111"
  },
  quizScore: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    paddingHorizontal: 10,
    marginLeft: "auto"
  },
  quizStar: {
    height: 14,
    width: 14,
    marginLeft: 3,
  },
  quizScoreText: {
    fontSize: 20,
    fontWeight: '400',
    color: "#ffc83d",
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
  containerAnswer: {
    alignSelf: "center",
    marginVertical: "auto",
    width: Dimensions.get("window").width - 40,
    height: "auto",
    maxHeight: 600,
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
  correctAnswerText: {
    fontSize: 16,
    marginTop: 20,
    color: "#111",
  },
  yourAnswerText: {
    fontSize: 16,
    marginTop: 5,
    color: "#111",
  },
  resultText: {
    fontSize: 16,
    marginTop: 20,
    color: "#111",
    alignSelf: "center",
    fontWeight: "bold"
  },
  btnSubmit: {
    marginVertical: 20,
    borderRadius: 30,
    width: 200,
    alignSelf: "center",
  },
  scoreText: {
    fontSize: 16,
    color: "#111",
    alignSelf: "center"
  },
  scoreMsgText: {
    fontSize: 16,
    color: "#111",
    alignSelf: "center",
    marginTop: 5,
  }
});

export default function QuizOpenScreen({ route, navigation }: any) {
  //meta
  const [quizTitle, setQuizTitle] = useState<string>("");
  const [quizName, setQuizName] = useState<string>("");

  const [activeQuiz, setActiveQuiz] = useState<any>({});
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<any>({});


  //quiz mechanics state
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [quizEnded, setQuizEnded] = useState<boolean>(false);

  const [quizQuestionNo, setQuizQuestionNo] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);

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
      case "quiz2": setActiveQuiz(Quiz2Json); break;
      case "quiz3": setActiveQuiz(Quiz3Json); break;
      case "quiz4": setActiveQuiz(Quiz4Json); break;

    }
  }, [quizName])

  //functions

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizQuestionNo(1);
    setScore(0);
    setSelectedOpt(0);
    setTotalQuestions(activeQuiz.items.length);

    jumbleQuestions();
  }

  const jumbleQuestions = () => {

    const arry: any = activeQuiz.items;

    for (let i = arry.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arry[i];
      arry[i] = arry[j];
      arry[j] = temp;
    }

    setActiveQuizQuestions(arry);
  }

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizEnded(false);
    setQuizQuestionNo(0);
    setScore(0);
    setSelectedOpt(0);
    setTotalQuestions(0);
  }

  const submitAnswer = () => {
    const target: any = activeQuizQuestions[quizQuestionNo - 1];
    if (target.answer === selectedOpt) setScore(score + 1);

    setAnswerModal(true);
    setAnswerExplanation(target.explanation);
  }

  const navigate = () => {
    if (quizQuestionNo < totalQuestions) {
      const target: any = activeQuizQuestions[quizQuestionNo - 1];

      if (target) {
        setQuizQuestionNo(quizQuestionNo + 1);
        setSelectedOpt(0);
      }
    }
    else {
      setQuizEnded(true);
    }
  }

  const isCorrect = () => {
    return selectedOpt === activeQuizQuestions?.[quizQuestionNo - 1]?.answer
  }
  return (
    <ScrollView style={GlobalStyles.mainContainer}>
      <CoverHeader title={quizTitle} navigation={navigation} quiz={true} />

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
                <Text style={styles.quizNo}>{quizQuestionNo + ""}</Text>
                <Text style={styles.quizNoTotal}>{"/" + activeQuizQuestions.length}</Text>
                <View style={styles.quizScore}>
                  <Text style={styles.quizScoreText}>{score}</Text>
                  <Icons.Star fill={"#ffc83d"} style={styles.quizStar} />
                </View>
              </View>

              <Text style={styles.quizQuestion}>{activeQuizQuestions[quizQuestionNo - 1].question}</Text>

              {
                activeQuizQuestions[quizQuestionNo - 1].choices.map((choice: any, idx: number) =>
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
            <ScrollView style={modalStyles.containerAnswer}>
              <Text style={modalStyles.expText}>{answerExplanation}</Text>

              <Text style={modalStyles.correctAnswerText}>
                <Text>Correct answer: </Text>
                <Text>{
                  `${activeQuizQuestions?.[quizQuestionNo - 1]?.choices?.[
                  activeQuizQuestions?.[quizQuestionNo - 1]?.answer - 1
                  ]}`
                }</Text>
              </Text>

              <Text style={modalStyles.yourAnswerText}>
                <Text>Your answer: </Text>
                <Text>{
                  `${activeQuizQuestions?.[quizQuestionNo - 1]?.choices?.[
                  selectedOpt - 1
                  ]}`
                }</Text>
              </Text>

              <Text style={{
                ...modalStyles.resultText,
                color: isCorrect() ? theme["color-success-600"] : theme["color-danger-400"]
              }}>
                {isCorrect() ? "Your answer is correct!" : "Oops!"}
              </Text>

              <Button size="medium"
                style={{
                  ...modalStyles.btnSubmit,
                  backgroundColor: isCorrect() ? theme["color-success-600"] : theme["color-danger-400"],
                  borderColor: isCorrect() ? theme["color-success-600"] : theme["color-danger-400"]
                }}
                onPress={() => {
                  navigate();
                  setAnswerModal(false);
                  setAnswerExplanation("");
                }}>OK</Button>
            </ScrollView>
          </View>
        </Modal>

        <Modal visible={quizEnded} transparent={true}>
          <View style={modalStyles.backdrop}>
            <View style={modalStyles.container}>
              <Text style={modalStyles.scoreText}>{`You got ${score} ${score === 1 ? "point" : "points"}`}</Text>
              <Text style={modalStyles.scoreMsgText}>{score >= activeQuiz.passingScore ? "Congratulations! You have passed the quiz!" : "Try again next time!"}</Text>

              <Button size="medium"
                style={{
                  ...modalStyles.btnSubmit,
                  backgroundColor: score >= activeQuiz.passingScore ? theme["color-success-600"] : theme["color-danger-400"],
                  borderColor: score >= activeQuiz.passingScore ? theme["color-success-600"] : theme["color-danger-400"]
                }}
                onPress={() => { resetQuiz(); }}>OK</Button>
            </View>
          </View>
        </Modal>

      </View>
    </ScrollView>
  );
}