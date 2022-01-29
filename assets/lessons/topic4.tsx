import React, { Component, useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Dimensions, Image, Modal, Button, Pressable } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';


import GlobalStyles from "../../styles/GlobalStyles";
import LessonStyles from "../../styles/LessonStyles";
import LessonEngine from "../../screens/Lesson/LessonEngine";
import { TouchableOpacity } from "react-native-gesture-handler";


const Page1 = () => {
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.text}>
        In this Lesson, you will study and understand the processes involved in Genetic Engineering and you will be able to learn the applications of Recombinant DNA. It was designed and written to help you learn and master the Recombinant DNA.
      </Text>

      <View style={{ ...LessonStyles.box, marginVertical: 10 }}>
        <Text style={LessonStyles.boldText}>
          Learning Competency:
        </Text>
        <Text>
          Outline the processes involved in genetic engineering (STEM_BIO11/12- IIIa-b-6)
          Discuss the applications of recombinant DNA (STEM_BIO11/12- IIIa-b-7)
        </Text>
      </View>

      <Text style={LessonStyles.boldText}>
        Study Questions:
      </Text>
      <Text style={LessonStyles.text}>
        1. What is genetic engineering?
      </Text>
      <Text style={LessonStyles.text}>
        2. What are the basic steps used in the genetic engineering of a bacterial cell. What components are needed and why?
      </Text>
      <Text style={LessonStyles.text}>
        3. How does the recombinant DNA is inserted into a cell or organism? Be able to provide specific examples.
      </Text>
      <Text style={LessonStyles.text}>
        4. How will you describe the techniques used in the manipulation of DNA? What are the essential components of each process?
      </Text>
      <Text style={LessonStyles.text}>
        5. What are the different applications of genetic engineering.
      </Text>
    </View>
  )
}


const Topic4 = () => {
  return (
    <LessonEngine pages={[
      <Page1 />
    ]} />
  )
}
export default Topic4;