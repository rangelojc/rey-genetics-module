import React, { useRef, useState } from 'react';
import { Asset, useAssets } from 'expo-asset';

import { StyleSheet, View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { Video, AVPlaybackStatus } from 'expo-av';

import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../../components/Header";
import { FlexViewCrossStyleProps } from '@ui-kitten/components/devsupport';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#000',
  },
  video: {
    alignSelf: 'center',
    width: "100%",
    height: 360,
    backgroundColor: '#000',
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
    <View style={styles.notFound}>
      <Text>Video not found</Text>
    </View>
  )
}

export default function VideoOpenScreen({ route, navigation }: any) {
  const [videoFiles] = useAssets(
    [
      require('../../assets/videos/video1.mp4'),
      require('../../assets/videos/video2.mp4')
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
      <Header title={videoTitle} backAction="true" navigation={navigation} />

      <View style={{ ...GlobalStyles.column, ...GlobalStyles.center, ...GlobalStyles.flex }}>
        {
          Object.keys(videoFile).length ? <VideoComponent video={videoFile} /> : <NoVideoFound />
        }
      </View>
    </View>
  );
}