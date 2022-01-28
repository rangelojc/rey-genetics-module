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


const Page5 = () => {
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.text}>
        The loci examined in linkage analysis need not be genes of functional significance; indeed, anonymous segments of DNA (stretches of DNA with no known function) called genetic markers are often more useful in genetic linkage analysis. In order for a genetic marker to be of benefit in a linkage analysis, the chromosomal location of the marker must be known and, most importantly, there must be some variation in the sequence or length of these markers among individuals. Nongene markers used in linkage analysis are classified into four broad categories: restriction fragment length polymorphisms (RFLPs), variable number of tandem repeat (VNTRs), short tandem repeat polymorphisms (STRPs), and single nucleotide repeats (SNPs).
      </Text>
    </View>
  )
}



const Page6 = () => {
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        Gene Interactions
      </Text>
      <Text style={LessonStyles.text}>
        The genes of an individual do not operate isolated from one another, but obviously are functioning in a common cellular environment. Thus, it is expected interactions between genes would occur. Bateson and Punnett performed a classical experiment that demonstrated genetic interactions. They analyzed the three comb types of chicken known to exist at that time:
      </Text>

      <View style={LessonStyles.spacer}></View>


      <Text style={LessonStyles.boldText}>
        Chicken varieties and their phenotypes:
      </Text>
      <Text>
        <Text style={LessonStyles.boldText}>Wyandotte </Text>
        <Text style={LessonStyles.text}> Rose Comb</Text>
      </Text>
      <Text>
        <Text style={LessonStyles.boldText}>Brahmas </Text>
        <Text style={LessonStyles.text}> Pea Comb</Text>
      </Text>
      <Text>
        <Text style={LessonStyles.boldText}>Leghorns </Text>
        <Text style={LessonStyles.text}> Single Comb</Text>
      </Text>

    </View>
  )
}



const Page7 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson2image3.png')
      }
    }
  ]

  const imageList2: any = [
    {
      props: {
        source: require('./resources/lesson2image4.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)
  const [openImage2Modal, setOpenImage2Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 350, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image3.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setOpenImage2Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 200, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image4.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        Result: The F1 differed from both parents and two new phenotypes not seen in the parents appeared in the F2. How can this result be explained? The first clue is the F2 ratio. We have seen this ratio before when the F1 from a dihybrid cross is selfed (or intermated). This observation suggests that two genes may control the phenotype of the comb. The gene interactions and genotypes were determined by performing the appropriate testcrosses.
      </Text>


      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

      <Modal visible={openImage2Modal} transparent={true}>
        <ImageViewer imageUrls={imageList2} onCancel={() => setOpenImage2Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

    </View>
  )
}


const Page8 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson2image5.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.text}>
        A series of experiments demonstrated that the genotypes controlling the various comb phenotypes are as follows
      </Text>

      <View style={LessonStyles.spacer}></View>

      <Text style={LessonStyles.boldText}>
        Phenotypes, genotypes and frequency:
      </Text>
      <Text>
        <Text style={LessonStyles.text}> Walnut </Text>
        <Text style={LessonStyles.italicText}> R_P_ </Text>
        <Text style={LessonStyles.italicText}> 9/16 </Text>
      </Text>
      <Text>
        <Text style={LessonStyles.text}> Rose </Text>
        <Text style={LessonStyles.italicText}> R_pp </Text>
        <Text style={LessonStyles.italicText}> 3/16 </Text>
      </Text>
      <Text>
        <Text style={LessonStyles.text}> Pea </Text>
        <Text style={LessonStyles.italicText}> rrP_ </Text>
        <Text style={LessonStyles.italicText}> 3/16 </Text>
      </Text>
      <Text>
        <Text style={LessonStyles.text}> Single </Text>
        <Text style={LessonStyles.italicText}> rrpp </Text>
        <Text style={LessonStyles.italicText}> 9/16 </Text>
      </Text>

      <View style={LessonStyles.spacer}></View>

      <Text style={LessonStyles.text}>
        It was later shown that the genotypes of the initial parents were:
      </Text>

      <Text style={LessonStyles.text}> Rose = RRpp </Text>
      <Text style={LessonStyles.text}> Pea = rrPP </Text>

      <Text style={LessonStyles.text}>
        Therefore, genotypically the cross was:
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 200, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image5.png')}
        />
      </TouchableOpacity>

      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

    </View>
  )
}



const Page9 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson2image6.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)


  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.text}>
        The development of any individual is obviously the expression of all the genes that are a part of its genetic makeup. Therefore, it is not an unexpected conclusion that more than one gene could be responsible for the expression of a single phenotype. We will now discuss this situation. First let's give a definition.
      </Text>

      <View style={LessonStyles.spacer}></View>

      <Text>
        <Text style={LessonStyles.boldText}>Epistasis</Text>
        <Text style={LessonStyles.text}> - the interaction between two or more genes to control a single phenotype</Text>
      </Text>

      <View style={LessonStyles.spacer}></View>

      <Text style={LessonStyles.text}>
        The interactions of the two genes which control comb type was revealed because we could identify and recognize the 9:3:3:1. Other genetic interactions were identified because the results of crossing two dihybrids produced a modified Mendelian ratio. All of the results are modifications of the 9:3:3:1 ratio.
      </Text>

      <View style={LessonStyles.spacer}></View>

      <Text>
        <Text style={LessonStyles.boldText}>Example 1: </Text>
        <Text style={LessonStyles.text}> 15:1 Ratio</Text>
      </Text>
      <Text>
        <Text style={LessonStyles.boldText}>Phenotypes: </Text>
        <Text style={LessonStyles.text}> Kernel Color in Wheat</Text>
      </Text>


      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 200, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image6.png')}
        />
      </TouchableOpacity>

      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

    </View>
  )
}




const Page10 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson2image7.png')
      }
    }
  ]


  const imageList2: any = [
    {
      props: {
        source: require('./resources/lesson2image8.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)
  const [openImage2Modal, setOpenImage2Modal] = useState<boolean>(false)


  return (
    <View style={LessonStyles.page}>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 150, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image7.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        For this type of pathway a functional enzyme A or B can produce a product from a common precursor. The product gives color to the wheat kernel. Therefore, only one dominant allele at either of the two loci is required to generate the product.
      </Text>

      <Text style={LessonStyles.text}>
        Thus, if a pure line wheat plant with a colored kernel (genotype = AABB) is crossed to plant with white kernels (genotype = aabb) and the resulting F1 plants are selfed, a modification of the dihybrid 9:3:3:1 ratio will be produced. The following table provides a biochemical explanation for the 15:1 ratio.
      </Text>

      <TouchableOpacity onPress={() => setOpenImage2Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 70, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image8.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        If we sum the three different genotypes that will produce a colored kernel we can see that we can achieve a 15:1 ratio. Because either of the genes can provide the wild type phenotype, this interaction is called duplicate gene action.
      </Text>

      <Text>
        <Text style={LessonStyles.boldText}>Example 2: </Text>
        <Text style={LessonStyles.text}> 9:7 Ratio</Text>
      </Text>
      <Text>
        <Text style={LessonStyles.boldText}>Phenotypes: </Text>
        <Text style={LessonStyles.text}> Flower color in sweet pea</Text>
      </Text>

      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

      <Modal visible={openImage2Modal} transparent={true}>
        <ImageViewer imageUrls={imageList2} onCancel={() => setOpenImage2Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

    </View>
  )
}



const Page11 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson2image9.png')
      }
    }
  ]


  const imageList2: any = [
    {
      props: {
        source: require('./resources/lesson2image10.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)
  const [openImage2Modal, setOpenImage2Modal] = useState<boolean>(false)


  return (
    <View style={LessonStyles.page}>

      <Text style={LessonStyles.text}>
        If two genes are involved in a specific pathway and functional products from both are required for expression, then one recessive allelic pair at either allelic pair would result in the mutant phenotype. This is graphically shown in the following diagram.
      </Text>

      <TouchableOpacity onPress={() => setOpenImage2Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 70, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image9.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        If a pure line pea plant with colored flowers (genotype = CCPP) is crossed to pure line, homozygous recessive plant with white flowers, the F1 plant will have colored flowers and a CcPp genotype. The normal ratio from selfing dihybrid is 9:3:3:1, but epistatic interactions of the C and P genes will give a modified 9:7 ratio. The following table describes the interactions for each genotype and how the ratio occurs.
      </Text>

      <TouchableOpacity onPress={() => setOpenImage2Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 100, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image10.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        Because both genes are required for the correct phenotype, this epistatic interaction is called <Text style={LessonStyles.boldText}>complementary gene action.</Text>
      </Text>

      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

      <Modal visible={openImage2Modal} transparent={true}>
        <ImageViewer imageUrls={imageList2} onCancel={() => setOpenImage2Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

    </View>
  )
}



const Page12 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson2image11.png')
      }
    }
  ]

  const imageList2: any = [
    {
      props: {
        source: require('./resources/lesson2image12.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)
  const [openImage2Modal, setOpenImage2Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>

      <Text>
        <Text style={LessonStyles.boldText}>Example 3: </Text>
        <Text style={LessonStyles.text}> 12:3:1 Ratio</Text>
      </Text>
      <Text>
        <Text style={LessonStyles.boldText}>Phenotypes: </Text>
        <Text style={LessonStyles.text}> Fruit Color in Squash</Text>
      </Text>

      <View style={LessonStyles.spacer}></View>

      <Text style={LessonStyles.text}>
        With this interaction, color is recessive to no color at one allelic pair. This recessive allele must be expressed before the specific color allele at a second locus is expressed. At the first gene white colored squash is dominant to colored squash, and the gene symbols are W=white and w=colored. At the second gene yellow is dominant to green, and the symbols used are G=yellow, g=green. If the dihybrid is selfed, three phenotypes are produced in a 12:3:1 ratio. The following table explains how this ratio is obtained.
      </Text>
      <View style={LessonStyles.spacer}></View>


      <Text style={LessonStyles.boldText}>Shapes of Squash Fruit</Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 250, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image11.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setOpenImage2Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 70, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image12.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        Because the presence of the dominant W allele masks the effects of either the G or g allele, this type of interaction is called <Text style={LessonStyles.boldText}>dominant epistasis.</Text>
      </Text>

      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

      <Modal visible={openImage2Modal} transparent={true}>
        <ImageViewer imageUrls={imageList2} onCancel={() => setOpenImage2Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>
    </View>
  )
}



const Page13 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson2image13.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>

      <Text>
        <Text style={LessonStyles.boldText}>Example 4: </Text>
        <Text style={LessonStyles.text}> 13:3 Ratio</Text>
      </Text>
      <Text>
        <Text style={LessonStyles.boldText}>Phenotypes: </Text>
        <Text style={LessonStyles.text}> Malvidin production in Primula</Text>
      </Text>

      <View style={LessonStyles.spacer}></View>

      <Text style={LessonStyles.text}>
        Certain genes have the ability to suppress the expression of a gene at a second locus. The production of the chemical malvidin in the plant Primula is an example. Both the synthesis of the chemical (controlled by the K gene) and the suppression of synthesis at the K gene (controlled by the D gene) are dominant traits. The F1 plant with the genotype KkDd will not produce malvidin because of the presence of the dominant D allele. What will be the distribution of the F2 phenotypes after the F1 was crossed?
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 70, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image13.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        The ratio from the above table is 13 no malvidin production to 3 malvidin production. Because the action of the dominant D allele masks the genes at the K locus, this interaction is termed
        <Text style={LessonStyles.boldText}> dominant suppression epistasis.</Text>
      </Text>

      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>
    </View>
  )
}


const Page14 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson2image14.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>

      <Text>
        <Text style={LessonStyles.boldText}>Suppressor </Text>
        <Text style={LessonStyles.text}> - a genetic factor that prevents the expression of alleles at a second locus; this is an example of epistatic interaction</Text>
      </Text>

      <View style={LessonStyles.spacer}></View>

      <Text style={LessonStyles.text}>Remember that epistasis is the interaction between different genes. If one allele or allelic pair masks the expression of an allele at the second gene, that allele or allelic pair is epistatic to the second gene. Therefore, the following table summarizes the four epistatic interactions discussed above.</Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 90, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson2image14.png')}
        />
      </TouchableOpacity>

      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>
    </View>
  )
}

const Topic2 = () => {
  return (
    <LessonEngine pages={[
      <Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />, <Page6 />, <Page7 />, <Page8 />, <Page9 />, <Page10 />,
      <Page11 />, <Page12 />, <Page13 />, <Page14 />
    ]} />
  )
}
export default Topic2;