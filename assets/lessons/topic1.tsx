import React, { Component, useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Dimensions, Image, Modal, Button, Pressable } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';


import GlobalStyles from "../../styles/GlobalStyles";
import LessonStyles from "../../styles/LessonStyles";
import LessonEngine from "../../screens/Lesson/LessonEngine";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = {
  container: {
    // minHeight: Dimensions.get("window").height,
  },
  navWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
}

const Page1 = () => {
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.text}>
        In this Lesson, you will study and understand how to predict genotypes and phenotypes of parents and offsprings using the laws of inheritance. It was designed and written to help you learn and master the Mendel’s laws of inheritance.
      </Text>

      <View style={{ ...LessonStyles.box, marginVertical: 20 }}>
        <Text style={LessonStyles.boldText}>
          Learning Competency:
        </Text>
        <Text>
          Predict genotypes and phenotypes of parents and offspring using the laws of inheritance. (STEM_BIO11/12 -IIIa-b-1)
        </Text>
      </View>

      <Text style={LessonStyles.boldText}>
        Study Questions:
      </Text>
      <Text style={LessonStyles.text}>
        1. What is Mendelian Inheritance?
      </Text>
      <Text style={LessonStyles.text}>
        2. How will you describe the Mendel’s Laws of Inheritance?
      </Text>
      <Text style={LessonStyles.text}>
        3. What is Genotype? What is Phenotype?
      </Text>
      <Text style={LessonStyles.text}>
        4. How does one predict genotype and phenotypes of parents and offspring using the laws of inheritance?
      </Text>
    </View>
  )
}


const Page2 = () => {
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.text}>
        <Text style={LessonStyles.boldText}>Mendelian inheritance </Text>
        is a type of biological inheritance that follows the principles originally proposed by Gregor Mendel in 1865 and 1866,
        re-discovered in 1900 and popularized by William Bateson.
        These principles were initially controversial.
        When Mendel's theories were integrated with the Boveri–Sutton chromosome theory of inheritance by Thomas Hunt Morgan in 1915,
        they became the core of classical genetics. Ronald Fisher combined these ideas with the theory of natural selection in his 1930 book
        <Text style={LessonStyles.italicText}> The Genetical Theory of Natural Selection</Text>,
        putting evolution onto a mathematical footing and forming the basis for population genetics within the modern evolutionary synthesis.
      </Text>

      <Text style={LessonStyles.boldText}>
        1. Law of dominance and uniformity
      </Text>
      <Text style={LessonStyles.text}>
        Some alleles are dominant while others are recessive; an organism with at least one dominant allele will display the effect of the dominant allele
      </Text>
      <View style={LessonStyles.spacer}></View>
      <Text style={LessonStyles.boldText}>
        2. Law of segregation
      </Text>
      <Text style={LessonStyles.text}>
        During gamete formation, the alleles for each gene segregate from each other so that each gamete carries only one allele for each gene.
      </Text>
      <View style={LessonStyles.spacer}></View>
      <Text style={LessonStyles.boldText}>
        3. Law of independent assortment
      </Text>
      <Text style={LessonStyles.text}>
        Genes of different traits can segregate independently during the formation of gametes.
      </Text>

    </View>
  )
}


const Page3 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson1image1.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        1. Law of Dominance and Uniformity
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 400, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson1image1.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        F1 generation: All individuals have the same genotype and same phenotype expressing the dominant trait (red).
        F2 generation: The phenotypes in the second generation show a 3 : 1 ratio.
        In the genotype 25 % are homozygous with the dominant trait, 50 % are heterozygous genetic carriers of the recessive trait, 25 % are homozygous with the recessive genetic trait and expressing the recessive character.
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
        If two parents are mated with each other who differ in one genetic characteristic for which they are both homozygous (each pure-bred), all offspring in the first generation (F1) are equal to the examined characteristic in genotype and phenotype showing the dominant trait. This uniformity rule or reciprocity rule applies to all individuals of the F1-generation.
      </Text>
      <Text style={LessonStyles.text}>
        The principle of dominant inheritance discovered by Mendel states that in a heterozygote the dominant allele will cause the recessive allele to be "masked": that is, not expressed in the phenotype. Only if an individual is homozygous with respect to the recessive allele will the recessive trait be expressed. Therefore, a cross between a homozygous dominant and a homozygous recessive organism yields a heterozygous organism whose phenotype displays only the dominant trait.
      </Text>
      <Text style={LessonStyles.text}>
        The F1 offspring of Mendel's pea crosses always looked like one of the two parental varieties. In this situation of "complete dominance," the dominant allele had the same phenotypic effect whether present in one or two copies.
      </Text>
      <Text style={LessonStyles.text}>
        But for some characteristics, the F1 hybrids have an appearance in between the phenotypes of the two parental varieties. A cross between two four o'clock (Mirabilis jalapa) plants shows an exception to Mendel's principle, called incomplete dominance. Flowers of heterozygous plants have a phenotype somewhere between the two homozygous genotypes. In cases of intermediate inheritance (incomplete dominance) in the F1-generation Mendel's principle of uniformity in genotype and phenotype applies as well. Research about intermediate inheritance was done by other scientists. The first was Carl Correns with his studies about Mirabilis jalapa.
      </Text>
    </View>
  )
}

const Page5 = () => {

  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson1image2.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        2. Law of Segregation
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 400, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson1image2.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        A Punnett square for one of Mendel's pea plant experiments - self-fertilization of the F1 generation
      </Text>

      <Text style={LessonStyles.text}>
        The Law of Segregation of genes applies when two individuals, both heterozygous for a certain trait are crossed, for example hybrids of the F1-generation. The offspring in the F2-generation differ in genotype and phenotype, so that the characteristics of the grandparents (P-generation) regularly occur again. In a dominant-recessive inheritance an average of 25% are homozygous with the dominant trait, 50% are heterozygous showing the dominant trait in the phenotype (genetic carriers), 25% are homozygous with the recessive trait and therefore express the recessive trait in the phenotype. The genotypic ratio is 1 : 2 : 1, the phenotypic ratio is 3 : 1.
      </Text>

      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>
    </View>
  )
}


const Page6 = () => {
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.text}>
        In the pea plant example, the capital "B" represents the dominant allele for purple blossom and lowercase "b" represents the recessive allele for white blossom. The pistil plant and the pollen plant are both F1-hybrids with genotype "B b". Each has one allele for purple and one allele for white. In the offspring, in the F2-plants in the Punnett-square, three combinations are possible. The genotypic ratio is 1 BB : 2 Bb : 1 bb. But the phenotypic ratio of plants with purple blossoms to those with white blossoms is 3 : 1 due to the dominance of the allele for purple. Plants with homozygous "b b" are white flowered like one of the grandparents in the P-generation.
      </Text>
      <Text style={LessonStyles.text}>
        In cases of incomplete dominance the same segregation of alleles takes place in the F2-generation, but here also the phenotypes show a ratio of 1 : 2 : 1, as the heterozygous are different in phenotype from the homozygous because the genetic expression of one allele compensates the missing expression of the other allele only partially. This results in an intermediate inheritance which was later described by other scientists.
      </Text>
    </View>
  )
}


const Page7 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson1image3.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)


  return (
    <View style={LessonStyles.page}>
      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 400, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson1image3.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        In Mirabilis jalapa and Antirrhinum majus are examples for intermediate inheritance. As seen in the F1-generation, heterozygous plants have "light pink" flowers—a mix of "red" and "white". The F2-generation shows a 1:2:1 ratio of red : light pink : white
      </Text>
      <Text style={LessonStyles.text}>
        In some literature sources the principle of segregation is cited as "first law". Nevertheless, Mendel did his crossing experiments with heterozygous plants after obtaining these hybrids by crossing two purebred plants, discovering the principle of dominance and uniformity at first.
      </Text>
      <Text style={LessonStyles.text}>
        Molecular proof of segregation of genes was subsequently found through observation of meiosis by two scientists independently, the German botanist Oscar Hertwig in 1876, and the Belgian zoologist Edouard Van Beneden in 1883. Most alleles are located in chromosomes in the cell nucleus. Paternal and maternal chromosomes get separated in meiosis, because during spermatogenesis the chromosomes are segregated on the four sperm cells that arise from one mother sperm cell, and during oogenesis the chromosomes are distributed between the polar bodies and the egg cell. Every individual organism contains two alleles for each trait. They segregate (separate) during meiosis such that each gamete contains only one of the alleles. When the gametes unite in the zygote the alleles—one from the mother one from the father—get passed on to the offspring. An offspring thus receives a pair of alleles for a trait by inheriting homologous chromosomes from the parent organisms: one allele for each trait from each parent. Heterozygous individuals with the dominant trait in the phenotype are genetic carriers of the recessive trait.
      </Text>

      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>
    </View>
  )
}

const Page8 = () => {
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        3. Law of Independent Assortment
      </Text>

      <Text style={LessonStyles.text}>
        The Law of Independent Assortment states that alleles for separate traits are passed independently of one another. That is, the biological selection of an allele for one trait has nothing to do with the selection of an allele for any other trait. Mendel found support for this law in his dihybrid cross experiments. In his monohybrid crosses, an idealized 3:1 ratio between dominant and recessive phenotypes resulted. In dihybrid crosses, however, he found a 9:3:3:1 ratios. This shows that each of the two alleles is inherited independently from the other, with a 3:1 phenotypic ratio for each.
      </Text>

      <Text style={LessonStyles.text}>
        Independent assortment occurs in eukaryotic organisms during meiotic metaphase I, and produces a gamete with a mixture of the organism's chromosomes. The physical basis of the independent assortment of chromosomes is the random orientation of each bivalent chromosome along the metaphase plate with respect to the other bivalent chromosomes. Along with crossing over, independent assortment increases genetic diversity by producing novel genetic combinations.
      </Text>
    </View>
  )
}


const Page9 = () => {
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.text}>
        There are many deviations from the principle of independent assortment due to genetic linkage.
      </Text>

      <Text style={LessonStyles.text}>
        Of the 46 chromosomes in a normal diploid human cell, half are maternally derived (from the mother's egg) and half are paternally derived (from the father's sperm). This occurs as sexual reproduction involves the fusion of two haploid gametes (the egg and sperm) to produce a zygote and a new organism, in which every cell has two sets of chromosomes (diploid). During gametogenesis the normal complement of 46 chromosomes needs to be halved to 23 to ensure that the resulting haploid gamete can join with another haploid gamete to produce a diploid organism.
      </Text>

      <Text style={LessonStyles.text}>
        In independent assortment, the chromosomes that result are randomly sorted from all possible maternal and paternal chromosomes. Because zygotes end up with a mix instead of a pre-defined "set" from either parent, chromosomes are therefore considered assorted independently. As such, the zygote can end up with any combination of paternal or maternal chromosomes. For human gametes, with 23 chromosomes, the number of possibilities is 223 or 8,388,608 possible combinations. This contributes to the genetic variability of progeny. Generally, the recombination of genes has important implications for many evolutionary processes.
      </Text>
    </View>
  )
}

const Page10 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson1image4.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        Illustrative Examples:
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 400, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson1image4.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        Segregation and independent assortment are consistent with the chromosome theory of inheritance.
      </Text>


      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

    </View>
  )
}

const Page11 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson1image5.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)


  return (
    <View style={LessonStyles.page}>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 400, width: Dimensions.get("window").width - 20 }}
          source={require('./resources/lesson1image5.png')}
        />
      </TouchableOpacity>


      <Text style={LessonStyles.text}>
        When the parents are homozygous for two different genetic traits (llSS and LL sP sP), their children in the F1 generation are heterozygous at both loci and only show the dominant phenotypes (Ll S sP). P-Generation: Each parent possesses one dominant and one recessive trait purebred (homozygous). In this example, solid coat color is indicated by S (dominant), Piebald spotting by sP (recessive), while fur length is indicated by L (short, dominant) or l (long, recessive). All individuals are equal in genotype and phenotype. In the F2 generation all combinations of coat color and fur length occur: 9 are short haired with solid colour, 3 are short haired with spotting, 3 are long haired with solid colour and 1 is long haired with spotting. The traits are inherited independently, so that new combinations can occur. Average number ratio of phenotypes 9:3:3:1
      </Text>

      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>


    </View>
  )
}

const Page12 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson1image6.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 150, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson1image6.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        For example 3 pairs of homologous chromosomes allow 8 possible combinations, all equally likely to move into the gamete during meiosis. This is the main reason for independent assortment. The equation to determine the number of possible combinations given the number of homologous pairs = 2x (x = number of homologous pairs)
      </Text>

      <Modal visible={openImage1Modal} transparent={true}>
        <ImageViewer imageUrls={imageList1} onCancel={() => setOpenImage1Modal(false)} enableSwipeDown={true} backgroundColor={"white"} />
      </Modal>

    </View>
  )
}


const Topic1 = () => {
  return (
    <LessonEngine pages={[
      <Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />, <Page6 />, <Page7 />, <Page8 />, <Page9 />, <Page10 />,
      <Page11 />, <Page12 />
    ]} />
  )
}
export default Topic1;