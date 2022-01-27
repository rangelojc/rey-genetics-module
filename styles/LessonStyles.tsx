import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

import theme from "../theme/theme.json"

export default StyleSheet.create({
  //lessons
  page: {
    padding: 5,
    minHeight: 200,
    width: "100%"
  },
  title: {
    fontSize: 21,
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
    resizeMode: 'contain',
    alignSelf: "center"
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  italicText: {
    fontSize: 16,
    fontStyle: "italic"
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 5,
  }
})
