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
        source: require('./resources/lesson3image1.png')
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


      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />

    </View>
  )
}



const Page3 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson3image2.png')
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

      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />

    </View>
  )
}


const Page4 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson3image3.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        What is the composition of RNA?
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 200, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson3image3.png')}
        />
      </TouchableOpacity>


      <Text style={LessonStyles.text}>
        The primary structure of RNA is composed of nucleotides attached by 5’-3’ phosphodiester bonds between ribose sugars. Ribose has the molecular formula, C5H10O5, and has a naturally occurring D-ribose form and a less common L-ribose. The D and L designations refer to the hydroxyl group positions. The nucleotide bases consist of adenine, guanine, cytosine, and uracil. Two hydrogen bonds form between adenine and uracil, while three bonds form between cytosine and guanine. The base pairing via hydrogen bonds is the basis of RNA secondary structure. The RNA tertiary structure is the result of RNA folding, which creates a three-dimensional shape consisting of helices and grooves. RNA differs from DNA in that it contains a uracil nucleotide instead of thymine and carries a 2’ hydroxyl group rather than a 2’ hydrogen. Due to its interaction with the solvent environment, the 2’ hydroxyl group contributes to RNA conformation
      </Text>

      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />

    </View>
  )
}


const Page5 = () => {
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        How is it made?
      </Text>

      <Text style={LessonStyles.text}>
        RNA polymerases synthesize RNA from DNA through a process called transcription. In prokaryotes, a single RNA polymerase catalyzes transcription for all types of RNA. In eukaryotes, there are different types of RNA polymerases, each responsible for synthesizing a specific RNA. RNA polymerase I synthesize rRNA. RNA polymerase II creates mRNA, and RNA polymerase III makes tRNA. To initiate transcription, an RNA polymerase enzyme binds to a promoter region on DNA, and the DNA double helix unwinds into a template strand and non-coding strand. During transcription, an RNA polymerase uses the 3’-5’ DNA template strand to synthesize a 5’-3’ RNA strand with complementary nucleotides. The newly synthesized RNA strand is nearly identical to the non-coding strand of DNA except for uracil substituting thymine. In eukaryotes, each RNA polymerase has a unique mechanism to terminate transcription. For example, RNA polymerase II transcribed RNA has an AAUAAA poly(A) site that recruits a group of factors to cleave the transcript.
      </Text>

      <Text style={LessonStyles.text}>
        Prokaryotic RNA undergoes Rho-dependent or Rho-independent termination. In Rho-dependent termination, a Rho factor helicase binds to C-rich sites on the RNA, and ATP hydrolysis powers Rho to unwind the DNA-RNA complex and release the RNA transcript. On the other hand, Rho-independent termination utilizes a hairpin loop that causes the RNA polymerase to stall and allows the RNA transcript to be released.
      </Text>

    </View>
  )
}


const Page6 = () => {
  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        Structure of Proteins
      </Text>

      <Text style={LessonStyles.text}>
        Proteins are the end products of the decoding process that starts with the information in cellular DNA. As workhorses of the cell, proteins compose structural and motor elements in the cell, and they serve as the catalysts for virtually every biochemical reaction that occurs in living things. This incredible array of functions derives from a startlingly simple code that specifies a hugely diverse set of structures.
      </Text>

      <Text style={LessonStyles.text}>
        In fact, each gene in cellular DNA contains the code for a unique protein structure. Not only are these proteins assembled with different amino acid sequences, but they also are held together by different bonds and folded into a variety of three-dimensional structures. The folded shape, or conformation, depends directly on the linear amino acid sequence of the protein.
      </Text>
    </View>
  )
}


const Page7 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson3image4.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        What Are Proteins Made Of?
      </Text>

      <Text style={LessonStyles.text}>
        The building blocks of proteins are amino acids, which are small organic molecules that consist of an alpha (central) carbon atom linked to an amino group,
        a carboxyl group, a hydrogen atom, and a variable component called a side chain.
        Within a protein, multiple amino acids are linked together by <Text style={LessonStyles.boldText}>peptide bonds</Text>, thereby forming a long chain.
      </Text>

      <Text style={LessonStyles.text}>
        Peptide bonds are formed by a biochemical reaction that extracts a water molecule as it joins the amino group of one amino acid to the carboxyl group of a neighboring amino acid. The linear sequence of amino acids within a protein is considered the primary structure of the protein.
      </Text>


      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 400, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson3image4.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        Proteins are built from a set of only twenty amino acids, each of which has a unique side chain. The side chains of amino acids have different chemistries. The largest group of amino acids have nonpolar side chains. Several other amino acids have side chains with positive or negative charges, while others have polar but uncharged side chains. The chemistry of amino acid side chains is critical to protein structure because these side chains can bond with one another to hold a length of protein in a certain shape or conformation. Charged amino acid side chains can form ionic bonds, and polar amino acids are capable of forming hydrogen bonds. Hydrophobic side chains interact with each other via weak van der Waals interactions. The vast majority of bonds formed by these side chains are noncovalent. In fact, cysteines are the only amino acids capable of forming covalent bonds, which they do with their particular side chains. Because of side chain interactions, the sequence and location of amino acids in a particular protein guides where the bends and folds occur in that protein.
      </Text>

      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />

    </View>
  )
}



const Page8 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson3image5.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        Steps in DNA Replication and Protein Synthesis
      </Text>

      <Text style={LessonStyles.text}>
        The genetic material is stored in the form of DNA in most organisms. In humans, the nucleus of each cell contains 3 × 109 base pairs of DNA distributed over 23 pairs of chromosomes, and each cell has two copies of the genetic material. This is known collectively as the human genome. The human genome contains around 30 000 genes, each of which codes for one protein.
      </Text>

      <Text style={LessonStyles.text}>
        Large stretches of DNA in the human genome are transcribed but do not code for proteins. These regions are called introns and make up around 95% of the genome. The nucleotide sequence of the human genome is now known to a reasonable degree of accuracy but we do not yet understand why so much of it is non-coding. Some of this non-coding DNA controls gene expression but the purpose of much of it is not yet understood. This is a fascinating subject that is certain to advance rapidly over the next few years.
      </Text>

      <Text style={LessonStyles.text}>
        The Central Dogma of Molecular Biology states that DNA makes RNA makes proteins
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 100, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson3image5.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.text}>
        The process by which DNA is copied to RNA is called transcription, and that by which RNA is used to produce proteins is called translation.
      </Text>

      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />

    </View>
  )
}


const Page9 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson3image6.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.boldText}>
        DNA Replication
      </Text>

      <Text style={LessonStyles.text}>
        Each time a cell divides, each of its double strands of DNA splits into two single strands. Each of these single strands acts as a template for a new strand of complementary DNA. As a result, each new cell has its own complete genome. This process is known as DNA replication. Replication is controlled by the Watson-Crick pairing of the bases in the template strand with incoming deoxynucleoside triphosphates, and is directed by DNA polymerase enzymes. It is a complex process, particularly in eukaryotes, involving an array of enzymes. A simplified version of bacterial DNA replication is described
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 150, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson3image6.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.smallText}>
        Simplified representation of DNA replication in bacteria.
      </Text>

      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />

    </View>
  )
}



const Page10 = () => {
  const imageList1: any = [
    {
      props: {
        source: require('./resources/lesson3image7.png')
      }
    }
  ]

  const [openImage1Modal, setOpenImage1Modal] = useState<boolean>(false)

  return (
    <View style={LessonStyles.page}>
      <Text style={LessonStyles.text}>
        DNA biosynthesis proceeds in the 5′- to 3′-direction. This makes it impossible for DNA polymerases to synthesize both strands simultaneously. A portion of the double helix must first unwind, and this is mediated by helicase enzymes.
      </Text>

      <Text style={LessonStyles.text}>
        The leading strand is synthesized continuously but the opposite strand is copied in short bursts of about 1000 bases, as the lagging strand template becomes available. The resulting short strands are called Okazaki fragments (after their discoverers, Reiji and Tsuneko Okazaki). Bacteria have at least three distinct DNA polymerases: Pol I, Pol II and Pol III; it is Pol III that is largely involved in chain elongation. Strangely, DNA polymerases cannot initiate DNA synthesis de novo, but require a short primer with a free 3′-hydroxyl group. This is produced in the lagging strand by an RNA polymerase (called DNA primase) that is able to use the DNA template and synthesize a short piece of RNA around 20 bases in length. Pol III can then take over, but it eventually encounters one of the previously synthesized short RNA fragments in its path. At this point Pol I takes over, using its 5′- to 3′-exonuclease activity to digest the RNA and fill the gap with DNA until it reaches a continuous stretch of DNA. This leaves a gap between the 3′-end of the newly synthesized DNA and the 5′-end of the DNA previously synthesized by Pol III.
      </Text>

      <Text style={LessonStyles.text}>
        The gap is filled by DNA ligase, an enzyme that makes a covalent bond between a 5′-phosphate and a 3′-hydroxyl group (Figure). The initiation of DNA replication at the leading strand is more complex and is discussed in detail in more specialized texts.
      </Text>

      <TouchableOpacity onPress={() => setOpenImage1Modal(true)}>
        <Image
          style={{ ...LessonStyles.image, height: 120, width: Dimensions.get("window").width - 50 }}
          source={require('./resources/lesson3image7.png')}
        />
      </TouchableOpacity>

      <Text style={LessonStyles.smallText}>
        Simplified representation of the action of DNA polymerases in DNA replication in bacteria.
      </Text>

      <ImageModal visible={openImage1Modal} setVisibility={setOpenImage1Modal} images={imageList1} />

    </View>
  )
}


const Topic3 = () => {
  return (
    <LessonEngine pages={[
      <Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />, <Page6 />, <Page7 />, <Page8 />, <Page9 />, <Page10 />
    ]} />
  )
}
export default Topic3;