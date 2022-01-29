import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

import theme from "../theme/theme.json"

export default StyleSheet.create({
  //lessons
  page: {
    padding: 5,
    minHeight: 100,
    width: "100%"
  },
  title: {
    fontSize: 21,
    color: "#111"
  },
  box: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 5
  },
  spacer: {
    marginVertical: 10
  },
  image: {
    marginVertical: 5,
    resizeMode: 'contain',
    alignSelf: "center"
  },
  boldText: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    color: "#111"
  },
  italicText: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#111"
  },
  underlineText: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#111"
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 5,
    color: "#111",
    lineHeight: 20,
  },
  smallText: {
    fontSize: 12,
    textAlign: "justify",
    marginBottom: 5,
    color: "#111"
  }
})
