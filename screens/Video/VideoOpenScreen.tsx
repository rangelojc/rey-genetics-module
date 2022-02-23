import React, { useEffect, useRef, useState } from 'react';
import { useAssets } from 'expo-asset';

import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { Video, AVPlaybackStatus } from 'expo-av';

import GlobalStyles from "../../styles/GlobalStyles";
import CoverHeader from "../../components/CoverHeader";


const styles = StyleSheet.create({
  video: {
    alignSelf: 'center',
    width: "100%",
    height: 360,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    marginTop: 150,

  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    width: "100%",
    height: 360,
    marginTop: 150,
    marginBottom: 20
  }
});

const VideoComponent = (props: any) => {
  const video = useRef(null);
  const [status, setStatus] = useState();

  return (
    <Video
      ref={video}
      style={styles.video}
      source={props.video}
      useNativeControls={true}
      resizeMode="contain"
      isLooping={false}
      shouldPlay={true}
    //onPlaybackStatusUpdate={status => setStatus(status)}
    />
  )
}

const Loading = (props: any) => {
  return (
    <View style={{ ...GlobalStyles.mainWrapperView, ...styles.loading }}>
      <Text>Loading video...</Text>
    </View>
  )
}

export default function VideoOpenScreen({ route, navigation }: any) {
  const [videoFiles] = useAssets(
    [
      require('../../assets/videos/Topic1-Mendel_sLawsofInheritance-Part-1.mp4'),
      require('../../assets/videos/Topic1-Mendel_sLawsofInheritance-Part-2.mp4'),
      require('../../assets/videos/Topic2-SexLinkageandRecombination-Part-1.mp4'),
      require('../../assets/videos/Topic2-SexLinkageandRecombination-Part-2.mp4'),
      require('../../assets/videos/Topic3-CentralDogmaofMolecularBiology-Part-1.mp4'),
      require('../../assets/videos/Topic3-CentralDogmaofMolecularBiology-Part-2.mp4'),
      require('../../assets/videos/Topic4-RecombinantDNA-Part-1.mp4'),
      require('../../assets/videos/Topic4-RecombinantDNA-Part-2.mp4'),
      require('../../assets/videos/Topic4-RecombinantDNA-Part-3.mp4'),
    ]
  );

  const [videoTitle, setVideoTitle] = useState<string>("")
  const [videoFile, setVideoFile] = useState<any>({})

  useEffect(() => {
    const videoTitleStr: string = route.params.videoTitle;
    const videoFileName: string = route.params.videoFileName;

    setVideoTitle(videoTitleStr);
    setVideoFile(videoFiles?.find(v => v.name === videoFileName) || {});
  }, [videoFiles])

  return (
    <ScrollView style={GlobalStyles.mainContainer}>
      <CoverHeader title={videoTitle} navigation={navigation} />
      <View style={{ ...GlobalStyles.mainWrapperView, marginTop: -260 }}>
        <View style={{ ...GlobalStyles.column, ...GlobalStyles.center, ...GlobalStyles.flex }}>
          {
            Object.keys(videoFile).length ? <VideoComponent video={videoFile} /> : <Loading />
          }
        </View>
      </View>
    </ScrollView>
  );
}