import React, { Component, useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { Button } from '@ui-kitten/components';


import GlobalStyles from "../../styles/GlobalStyles";
import LessonStyles from "../../styles/LessonStyles";
import LessonEngine from "../../screens/Lesson/LessonEngine";

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
  const styles = {
    listContainer: {
      padding: 0,
      margin: 0
    }
  }

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
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        1. Law of Dominance and Uniformity
      </Text>

      <Image
        style={{ ...LessonStyles.image, height: 400, width: 350 }}
        source={require('./resources/lesson1image1.png')}
      />

      <Text style={LessonStyles.text}>
        F1 generation: All individuals have the same genotype and same phenotype expressing the dominant trait (red).
        F2 generation: The phenotypes in the second generation show a 3 : 1 ratio.
        In the genotype 25 % are homozygous with the dominant trait, 50 % are heterozygous genetic carriers of the recessive trait, 25 % are homozygous with the recessive genetic trait and expressing the recessive character.
      </Text>
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

const Topic1 = () => {
  return (
    <LessonEngine pages={[
      <Page1 />, <Page2 />, <Page3 />, <Page4 />
    ]} />
  )
}
export default Topic1;