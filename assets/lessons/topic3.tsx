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
        In this Lesson, you will study and understand the molecular structure of DNA, RNA and proteins and you will be able to diagram the steps in DNA replication and protein synthesis. It was designed and written to help you learn and master the central dogma of molecular biology.
      </Text>

      <View style={{ ...LessonStyles.box, marginVertical: 10 }}>
        <Text style={LessonStyles.boldText}>
          Learning Competency:
        </Text>
        <Text>
          Illustrate the molecular structure of DNA, RNA, and proteins (STEM_BIO11/12 -IIIa-b-4)
          Diagram the steps in DNA replication and protein synthesis (STEM_BIO11/12- IIIa-b-5)
        </Text>
      </View>

      <Text style={LessonStyles.boldText}>
        Study Questions:
      </Text>
      <Text style={LessonStyles.text}>
        1.	How do the molecular structures of DNA, RNA and Proteins differ?
      </Text>
      <Text style={LessonStyles.text}>
        2. What are different steps in Central Dogma of Molecular Biology>
      </Text>
      <Text style={LessonStyles.text}>
        3. What is DNA Replication?
      </Text>
      <Text style={LessonStyles.text}>
        4. How does Transcription differ from Translation?
      </Text>
    </View>
  )
}



const Page2 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson2image1.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        Illustrating the Molecular Structure of DNA, RNA and Proteins
      </Text>

      <Text style={LessonStyles.boldText}>
        1. Structure of DNA
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 400, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson3image1.png')}
        />
      </TouchableOpacity>

      <View style={LessonStyles.box}>
        <Text style={LessonStyles.smallText}>
          Figure 1: DNA is made of four types of nucleotides, which are linked covalently into a polynucleotide chain (a DNA strand) with a sugar-phosphate backbone from which the bases (A, C, G, and T) extend. A DNA molecule is composed of two DNA strands held together by hydrogen bonds between the paired bases. The arrowheads at the ends of the DNA strands indicate the polarities of the two strands,
        </Text>
      </View>

      <View style={LessonStyles.spacer}></View>

      <Text style={LessonStyles.text}>
        A DNA molecule consists of two long polynucleotide chains composed of four types of nucleotide subunits. Each of these chains is known as a DNA chain, or a DNA strand. Hydrogen bonds between the base portions of the nucleotides hold the two chains together (Figure 1).
      </Text>

      <Text style={LessonStyles.text}>
        Nucleotides are composed of a five-carbon sugar to which are attached one or more phosphate groups and a nitrogen-containing base. In the case of the nucleotides in DNA, the sugar is deoxyribose attached to a single phosphate group (hence the name deoxyribonucleic acid), and the base may be either adenine (A), cytosine (C), guanine (G), or thymine (T). The nucleotides are covalently linked together in a chain through the sugars and phosphates, which thus form a “backbone” of alternating sugar-phosphate-sugar-phosphate (see Figure 1). Because only the base differs in each of the four types of subunits, each polynucleotide chain in DNA is analogous to a necklace (the backbone) strung with four types of beads (the four bases A, C, G, and T). These same symbols (A, C, G, and T) are also commonly used to denote the four different nucleotides—that is, the bases with their attached sugar and phosphate groups.
      </Text>


      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

    </View>
  )
}



const Page3 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson2image2.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        2. Structure of RNA
      </Text>

      <Text style={LessonStyles.text}>
        Ribonucleic acid (RNA) is a molecule that is present in the majority of living organisms and viruses. It is made up of nucleotides, which are ribose sugars attached to nitrogenous bases and phosphate groups. The nitrogenous bases include adenine, guanine, uracil, and cytosine. RNA mostly exists in the single-stranded form, but there are special RNA viruses that are double-stranded. The RNA molecule can have a variety of lengths and structures. An RNA virus uses RNA instead of DNA as its genetic material and can cause many human diseases. Transcription is the process of RNA formation from DNA, and translation is the process of protein synthesis from RNA. The means of RNA synthesis and the way that it functions differs between eukaryotes and prokaryotes. Specific RNA molecules also regulate gene expression and have the potential to serve as therapeutic agents in human diseases.
      </Text>

      <Text style={LessonStyles.text}>
        Three main types of RNA are involved in protein synthesis. They are messenger RNA (mRNA), transfer RNA (tRNA), and ribosomal RNA (rRNA).
      </Text>


      <Text>
        <Text style={LessonStyles.boldText}>
          Messenger RNA (mRNA)
        </Text>
        <Text style={LessonStyles.text}>
          – a transcript copy of a gene which encodes a specific polypeptide
        </Text>
      </Text>
      <View style={LessonStyles.spacer}></View>

      <Text>
        <Text style={LessonStyles.boldText}>
          Transfer RNA (tRNA)
        </Text>
        <Text style={LessonStyles.text}>
          – carries the polypeptide subunits (amino acids) to the organelle responsible for synthesis (ribosome)
        </Text>
      </Text>
      <View style={LessonStyles.spacer}></View>

      <Text>
        <Text style={LessonStyles.boldText}>
          Ribosomal RNA (rRNA)
        </Text>
        <Text style={LessonStyles.text}>
          – a primary component of the ribosome and is responsible for its catalytic activity
        </Text>
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 150, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson3image2.png')}
        />
      </TouchableOpacity>










      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

    </View>
  )
}



const Topic3 = () => {
  return (
    <LessonEngine pages={[
      <Page1 />, <Page2 />, <Page3 />
    ]} />
  )
}
export default Topic3;