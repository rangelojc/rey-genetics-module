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
        In this Lesson, you will study and understand the sex linkage and recombination. It was designed and written to help you learn and master the Sex Linkage in Genetics.
      </Text>

      <View style={{ ...LessonStyles.box, marginVertical: 10 }}>
        <Text style={LessonStyles.boldText}>
          Learning Competency:
        </Text>
        <Text>
          Explain sex linkage and recombination. (STEM_BIO11/12 -IIIa-b-2)
          Describe modifications to Mendel’s classic ratios (gene interaction)
          (STEM_BIO11/12 -IIIa-b-3)
        </Text>
      </View>

      <Text style={LessonStyles.boldText}>
        Study Questions:
      </Text>
      <Text style={LessonStyles.text}>
        1. What is Sex Linkage and Recombination? How do they differ? How do these
        processes occur?
      </Text>
      <Text style={LessonStyles.text}>
        2. What is Homologous Chromosomes?
      </Text>
      <Text style={LessonStyles.text}>
        3. How will you define Crossing Over?
      </Text>
      <Text style={LessonStyles.text}>
        4. What is Gene Interaction?
      </Text>
      <Text style={LessonStyles.text}>
        5. How will you describe the modifications to Mendel’s Classic Ratios?
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