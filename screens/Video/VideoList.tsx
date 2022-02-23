import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Link, useLinkProps } from '@react-navigation/native';

import { Text, Button } from '@ui-kitten/components';

import GlobalStyles from '../../styles/GlobalStyles';
import videoListJson from '../../assets/videos/videoList.json';
import { useAssets } from 'expo-asset';

const LinkButton = ({ to, children }: any) => {
  const { onPress } = useLinkProps({ to });

  return (
    <Button
      onPress={onPress}
      style={styles.btnOpen}
      size='small'
    >
      {children}
    </Button>
  )

}

export default function VideoList(props: any) {
  const [videos, setVideos] = useState<any>([]);

  const [thumbAssets]: any = useAssets(
    [
      require('../../assets/videos/Topic1-Mendel_sLawsofInheritance-Part-1.png'),
      require('../../assets/videos/Topic1-Mendel_sLawsofInheritance-Part-2.png'),
      require('../../assets/videos/Topic2-SexLinkageandRecombination-Part-1.png'),
      require('../../assets/videos/Topic2-SexLinkageandRecombination-Part-2.png'),
      require('../../assets/videos/Topic3-CentralDogmaofMolecularBiology-Part-1.png'),
      require('../../assets/videos/Topic3-CentralDogmaofMolecularBiology-Part-2.png'),
      require('../../assets/videos/Topic4-RecombinantDNA-Part-1.png'),
      require('../../assets/videos/Topic4-RecombinantDNA-Part-2.png'),
      require('../../assets/videos/Topic4-RecombinantDNA-Part-3.png'),
    ]
  );

  //effects
  //attach thumbnail in video array
  useEffect(() => {
    if (thumbAssets?.length !== 0) {

      const videosWithThumbnail = videoListJson.map((vid: any) => {
        const target: any = thumbAssets?.find((v: any) => v.name === vid.name);

        return {
          ...vid,
          thumbnail: target
        }
      });

      setVideos(videosWithThumbnail)
    }
  }, [thumbAssets])

  //functions
  const goTo = (url: string, query: any) => {
    props.navigation.navigate(url, query);
  }

  return (
    <View style={props.style}>
      {
        videos.map((vid: any) =>
        (
          <TouchableOpacity style={styles.listItem} key={vid.name} onPress={() => { goTo("VideoOpen", { videoTitle: vid.title, videoFileName: vid.name }) }}>

            <View style={styles.listThumb}>
              <Image source={vid.thumbnail} style={styles.thumbnail} />
            </View>

            <View style={styles.listDetail}>
              <Text style={styles.title}>{`${vid.title}`}</Text>

              {/* <Text style={styles.description}>
                {vid.description}
              </Text> */}

              {/* <LinkButton to={`/VideoOpen?videoTitle=${vid.title}&videoFileName=${vid.name}`}>
                Watch
              </LinkButton> */}
            </View>

          </TouchableOpacity>
        ))
      }
    </View>
  )
}


const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    justifyContent: "center",
    minHeight: 150,
    backgroundColor: "#ffffff",
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 5,
    elevation: 2,
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  listThumb: {
    flex: 1,
    width: "100%",
    height: 200,
    overflow: "hidden"
  },
  listDetail: {
    marginTop: 20
  },
  thumbnail: {
    height: "100%",
    width: "100%",
    alignSelf: "center"
  },
  title: {
    ...GlobalStyles.text,
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center"
  },
  description: {
    ...GlobalStyles.text,
    color: "#949292"
  },
  btnOpen: {
    marginTop: 0,
    width: 100,
    alignSelf: "flex-start"
  },
})