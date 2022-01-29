import React, { Component, useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Dimensions, Image, Modal, Button, Pressable } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';


import GlobalStyles from "../../styles/GlobalStyles";
import LessonStyles from "../../styles/LessonStyles";
import LessonEngine from "../../screens/Lesson/LessonEngine";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageModal from "../../components/ImageModal";


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



const Page2 = () => {
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        Processes Involved in Genetic Engineering
      </Text>

      <Text style={LessonStyles.text}>
        <Text style={LessonStyles.boldText}>Genetic engineering </Text>
        is the deliberate manipulation of DNA, using techniques in the laboratory to alter genes in organisms. Even if the organisms being altered are not microbes, the substances and techniques used are often taken from microbes and adapted for use in more complex organisms.
      </Text>

    </View>
  )
}


const Page3 = () => {
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        Steps in Cloning a Gene
      </Text>

      <Text style={LessonStyles.text}>
        Let us walk through the basic steps for cloning a gene, a process by which a gene of interest can be replicated many times over. Let us pretend that we are going to genetically engineer E. coli cells to glow in the dark, a characteristic that they do not naturally possess.
      </Text>

      <Text style={LessonStyles.text}>
        1.	Isolate DNA of interest – first we need to identify the genes or genes that we are interested in, the <Text style={LessonStyles.boldText}>target DNA.</Text>
        If we want our E. coli cells to glow in the dark, we need to find an organism that possesses this trait and identify the gene or genes responsible for the trait.
        The <Text style={LessonStyles.boldText}>green fluorescent protein (GFP)</Text> commonly used as an expression marker in molecular techniques was originally isolated from jellyfish.
        In cloning a gene it is helpful to use a <Text style={LessonStyles.boldText}>cloning vector</Text>, typically a plasmid or virus, capable of independent replication that will stably carry the target DNA from one location to another. Plasmid vectors are available from both bacteria and yeast.
      </Text>
    </View>
  )
}


const Page4 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson4image1.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)


  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.text}>
        2.	Cut DNA with restriction endonucleases – once the target and vector DNA have been identified,
        both types of DNA are cut using <Text style={LessonStyles.boldText}>restriction endonucleases</Text>. These enzymes recognize short sequences of DNA that are 4-8 bp long. The enzymes are widespread in both bacteria and archaea, with each enzyme recognizing a specific inverted repeat sequence that is palindromic (reads the same on each DNA strand, in the 5’ to 3’ direction).
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 250, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson4image1.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.smallText}>Restriction Endonucleases</Text>

      <Text style={LessonStyles.text}>
        While some restriction endonucleases cut straight across the DNA (i.e. blunt cut), many make staggered cuts,
        producing a very short region of single-stranded DNA on each strand. These single-stranded regions are referred to as  <Text style={LessonStyles.boldText}>“sticky ends,”</Text> and are invaluable in molecular cloning since the unpaired bases will recombine with any DNA having the complementary base sequence.
      </Text>

      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />

    </View>
  )
}



const Page5 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson4image2.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.text}>
        3.	Combine target and vector DNA – after both types of DNA have been cleaved by the same restriction endonuclease,
        the two types of DNA are combined together with the addition of <Text style={LessonStyles.boldText}>DNA ligase</Text>, an enzyme that repairs the covalent bonds on the sugar-phosphate backbone of the DNA.
        This results in the creation of <Text style={LessonStyles.boldText}>recombinant DNA</Text>, DNA molecules that contain the DNA from two or more sources, also known as  <Text style={LessonStyles.boldText}>chimeras</Text>.
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 250, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson4image2.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.smallText}>Ligation</Text>

      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />

    </View>
  )
}


const Page6 = () => {
  return (
    <View style={LessonStyles.page}>

      <Text style={LessonStyles.text}>
        4.	Introduce recombined molecule into host cell – once the target DNA has been stably combined with vector DNA,
        the recombinant DNA must be introduced into a host cell, in order for the genes to be replicated or expressed.
        There are different methods for introducing the recombinant DNA, largely depending upon the complexity of the host organism. In the case of bacteria,
        <Text style={LessonStyles.boldText}> transformation</Text> is often the easiest method, using competent cells to pick up the recombinant DNA molecules. Alternatively,
        <Text style={LessonStyles.boldText}> electroporation</Text> can be used, where the cells are exposed to a brief pulse of high –voltage electricity causing the plasma membrane to become temporarily permeable to DNA passage.
        While some cells will acquire recombinant DNA with the appropriate configuration (i.e. target DNA combined with vector DNA), the method also will yield cells carrying recombinant DNA with alternate DNA combinations (i.e. plasmid DNA combining with another plasmid DNA molecule or target DNA attached to more target DNA).
        The mixture is referred to as a <Text style={LessonStyles.boldText}> genomic library</Text> and must be screened to select the appropriate clone.
        If random fragments of DNA were originally used (instead of isolation of the appropriate target DNA genes), the process is referred to as <Text style={LessonStyles.boldText}> shotgun cloning</Text> and can yield thousands or tens of thousands of clones to be screened.
      </Text>
    </View>
  )
}

const Page7 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson4image3.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        APPLICATIONS OF RECOMBINANT DNA TECHNOLOGY
      </Text>

      <Text style={LessonStyles.text}>
        Introducing Recombinant DNA into cells other than bacteria
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 200, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson4image3.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.smallText}>Tumor-Inducing Plasmid</Text>

      <Text style={LessonStyles.boldText}>
        Agrobacterium tumefaciens and the Ti plasmid
      </Text>

      <Text style={LessonStyles.text}>
        <Text style={LessonStyles.boldText}>Agrobacterium tumefaciens  </Text> is a plant pathogen that causes tumor formation called crown gall disease.
        The bacterium contains a plasmid known as the  <Text style={LessonStyles.boldText}>Ti (tumor inducing) plasmid</Text>, which inserts bacterial DNA into the host plant genome. Scientists utilize this natural process to do genetic engineering of plants by inserting foreign DNA into the Ti plasmid and removing the genes necessary for disease, allowing for the production of transgenic plants.
      </Text>

      <Text style={LessonStyles.boldText}>
        Gene gun
      </Text>

      <Text style={LessonStyles.text}>
        A gene gun uses very small metal particles (<Text style={LessonStyles.boldText}>microprojectiles</Text>) coated with the recombinant DNA, which are blasted at plant or animal tissue at a high velocity. If the DNA is transformed or taken up by the cell’s DNA, the genes are expressed.
      </Text>

      <Text style={LessonStyles.boldText}>
        Viral vectors
      </Text>

      <Text style={LessonStyles.text}>
        For a viral vector, virulence genes from a virus can be removed and foreign DNA inserted, allowing the virus capsid to be used as a mechanism for shuttling genetic material into a plant or animal cell. Marker genes are typically added that allow for identification of the cells that took up the genes.
      </Text>

      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />
    </View>
  )
}


const Page8 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson4image4.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>

      <Text style={LessonStyles.boldText}>
        DNA techniques
      </Text>

      <Text style={LessonStyles.text}>
        <Text style={LessonStyles.boldText}>1. Gel Electrophoresis </Text>
        - is a technique commonly used to separate nucleic acid fragments based on size. It can be used to identify particular fragments or to verify that a technique was successful. A porous gel is prepared made of agarose, with the concentration adjusted based on expected size. Nucleic acid samples are deposited into wells in the gel and an electrical current is applied. Nucleic acid, with its negative charge, will move towards the positive electrode, which should be placed at the bottom of the gel. The nucleic acid will move through the gel, with the smallest pieces encountering the least resistance and thus moving through the fastest. The length of passage of each nucleic acid fragment can be compared to a
        <Text style={LessonStyles.boldText}> DNA ladder</Text>, with fragments of known size.
      </Text>

      <Text style={LessonStyles.text}>
        <Text style={LessonStyles.boldText}>2. Polymerase Chain Reaction (PCR) </Text>
        - The polymerase chain reaction or PCR is a method used to copy or amplify DNA in vitro. The process can yield a billionfold copies of a single gene within a short period of time.
        <Text style={LessonStyles.boldText}> The template DNA</Text> is mixed with all the ingredients necessary to make DNA copies:
        <Text style={LessonStyles.boldText}> primers</Text> (small oligonucleotides that flank the gene or genes of interest by recognizing sequences on either side of it),
        <Text style={LessonStyles.boldText}> nucleotides</Text> (the building blocks of DNA), and
        <Text style={LessonStyles.boldText}> DNA polymerase</Text>.

        The steps involve heating the template DNA in order to
        <Text style={LessonStyles.boldText}> denature</Text> or separate the strands, dropping the temperature to allow the primers to
        <Text style={LessonStyles.boldText}> anneal</Text>, and then heating the mixture up to allow the DNA polymerase to
        <Text style={LessonStyles.boldText}> extend</Text> the primers, using the original DNA as an initial template. The cycle is repeated 20-30 times, exponentially increasing the amount of target DNA in a few hours.
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 200, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson4image4.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.smallText}>
        Polymerase Chain Reaction (PCR). By Enzoklop (Own work) [CC BY-SA 3.0], via Wikimedia Commons
      </Text>

      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />

    </View>
  )
}



const Page9 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson4image5.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>

      <Text style={LessonStyles.boldText}>
        Uses of Genetically Engineered Organisms
      </Text>

      <Text style={LessonStyles.text}>
        There can be numerous reasons to create a <Text style={LessonStyles.boldText}>genetically modified organism (GMO) or transgenic organism</Text>, defined as a genetically modified organism that contains a gene from a different organism. Typically the hope is that the GMO will provide needed information or a product of value to society.
      </Text>

      <Text style={LessonStyles.boldText}>
        Source of DNA
      </Text>

      <Text style={LessonStyles.text}>
        Genetically engineered organisms can be made so that a piece of DNA can be easily replicated, providing a large source of that DNA. For example, a gene associated with breast cancer can be spliced into the genome of E. coli, allowing for the rapid production of the gene so that it may be sequenced, studied, and manipulated, without requiring repeated tissue donations from human volunteers.
      </Text>

      <Text style={LessonStyles.boldText}>
        Source of RNA
      </Text>

      <Text style={LessonStyles.text}>
        <Text style={LessonStyles.boldText}>Antisense RNA</Text> is RNA that is complementary to the mRNA that will code for a protein. In cells it is made as a way to control target genes. There has been increasing interest in the use of antisense RNA as a way to prevent diseases that are caused by the production of a particular protein.
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 200, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson4image5.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.smallText}>
        Antisense RNA. By Robinson R [CC BY 2.5], via Wikimedia Commons
      </Text>

      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />

    </View>
  )
}


const Page10 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson4image6.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>

      <Text style={LessonStyles.boldText}>
        Source of Protein
      </Text>

      <Text style={LessonStyles.text}>
        Since microbes replicate so rapidly, it can be extremely advantageous to use them to manufacture proteins of interest or value. Given the right promoters, bacteria will express genes for proteins that are not naturally found in bacteria, such as cytokine. Genetically engineered cells have been used to make a wide variety of proteins of use to humans, such as insulin or human growth hormone.
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 250, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson4image6.png')}
        />
      </TouchableOpacity>

      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />

    </View>
  )
}


const Page11 = () => {
  return (
    <View style={LessonStyles.page}>

      <Text style={LessonStyles.boldText}>
        Key Words
      </Text>

      <Text style={LessonStyles.text}>
        genetic engineering, cloning, target DNA, green fluorescent protein (GFP), cloning vector, restriction endonuclease, sticky ends, DNA ligase, recombinant DNA, chimera, transformation, electroporation, genomic library, shotgun cloning, Agrobacterium tumefaciens, Ti plasmid, gene gun, microprojectiles, viral vector, gel electrophoresis, DNA ladder, polymerase chain reaction (PCR), template DNA, primer, nucleotide, DNA polymerase, denaturing, annealing, extending, genetically modified organism (GMO), transgenic organisms, antisense RNA.
      </Text>
    </View>
  )
}


const Topic4 = () => {
  return (
    <LessonEngine pages={[
      <Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />, <Page6 />, <Page7 />, <Page8 />, <Page9 />, <Page10 />, <Page11 />
    ]} />
  )
}
export default Topic4;