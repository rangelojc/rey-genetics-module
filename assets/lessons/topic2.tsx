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
        What is Sex Linkage and Recombination?
      </Text>
      <Text style={LessonStyles.text}>
        Sex Linkage refers to the association and co-inheritance of two DNA segments because they reside close together on the same chromosome.
        Recombination is the process by which they become separated during <Text style={LessonStyles.underlineText}>crossing over</Text>, which
        occurs during  <Text style={LessonStyles.boldText}>meiosis</Text>.
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 250, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image1.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        The existence of linkage and the frequency of recombination allow chromosomes to be mapped to determine the relative positions and distances of the genes and other DNA sequences on them.
        Linkage analysis is also a key tool for discovering the location and ultimate identity of genes for inherited diseases.
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
      <Text style={LessonStyles.text}>
        Each individual inherits a complete set of twenty-three chromosomes from each parent, and chromosomes are therefore present in <Text style={LessonStyles.boldText}>homologous</Text> pairs.
        The members of a pair carry the same set of genes at the same positions, or <Text style={LessonStyles.boldText}>loci</Text>.
        The two genes at a particular locus may be identical, or slightly different. The different forms of a gene are called alleles
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 200, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image2.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        Genes or loci can be linked either physically or genetically. Genes that are physically linked are on the same chromosome and are thus syntenic. Only syntenic genes can be genetically linked. Genes that are linked genetically are physically close enough to one another that they do not segregate independently during meiosis.
      </Text>


      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

    </View>
  )
}



const Page4 = () => {

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.text}>
        Understanding independent segregation is crucial to understanding linkage. Independent segregation was first discovered by Gregor Mendel, who found that, in pea plants, the different forms of two traits found in the parents, such as color and height, could occur in all possible combinations in the offspring. Thus, a tall parent with green pods crossed with a short parent with yellow pods could give rise to offspring that were tall with yellow pods or short with green pods, as well as some of each parental type. Mendel concluded that the factors controlling height segregated independently from the factors controlling pod color. Later work showed that this was because these genes occurred on separate (nonhomologous) chromosomes, which themselves segregate independently during meiosis.
      </Text>

      <Text style={LessonStyles.text}>
        How is it possible for physically linked genes to nonetheless segregate independently? The answer lies in the events of crossing over. During crossing over, homologous chromosomes exchange segments at several sites along their length, in a process called recombination. Thus, two loci at distant ends of the chromosome are almost certain to have at least one exchange point occur between them. If only one exchange occurs, two alleles that began on the same chromosome will end up on different chromosomes. If there are two exchange points between them, they will end up together; if three, they end up apart, and so on. Over long distances, the likelihood of two alleles remaining together is only 50 percent, no better than chance, and, therefore, loci that are far apart on a large chromosome are not genetically linked. Conversely, loci that are close together will not segregate independently, and are therefore genetically linked. It is these that are most useful for mapping and discovering disease genes.
      </Text>

    </View>
  )
}




const Topic2 = () => {
  return (
    <LessonEngine pages={[
      <Page1 />, <Page2 />, <Page3 />, <Page4 />
    ]} />
  )
}
export default Topic2;