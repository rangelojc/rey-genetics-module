import React, { useRef, useState } from 'react';
import { Asset, useAssets } from 'expo-asset';

import { StyleSheet, View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

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
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFound: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    width: "100%",
    marginBottom: 20,
    marginTop: 30,
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
    //onPlaybackStatusUpdate={status => setStatus(status)}
    />
  )
}

const NoVideoFound = (props: any) => {
  return (
    <View style={{ ...GlobalStyles.mainWrapper, ...styles.notFound }}>
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

  let videoTitle = '';
  let videoFileName = '';
  let videoFile = {};

  if (useIsFocused()) {
    videoTitle = route.params.params.videoTitle;
    videoFileName = route.params.params.videoFileName;
    videoFile = videoFiles?.find(v => v.name === videoFileName) || {};
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      <CoverHeader title={videoTitle} navigation={navigation} />

      <View style={GlobalStyles.mainWrapper}>
        <View style={{ ...GlobalStyles.column, ...GlobalStyles.center, ...GlobalStyles.flex }}>
          {
            Object.keys(videoFile).length ? <VideoComponent video={videoFile} /> : <NoVideoFound />
          }
        </View>
      </View>
    </View>
  );
}