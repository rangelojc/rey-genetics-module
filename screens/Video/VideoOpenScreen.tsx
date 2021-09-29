import React, { useRef, useState } from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';

import { StyleSheet, View, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../../components/Header";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 360,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function VideoOpenScreen({ route, navigation }: any) {
  const video = useRef(null);
  const [status, setStatus] = useState({ isPlaying: "Pause" });

  let videoTitle = '';
  let videoFileName = '';
  let loadedVideo = undefined;

  if (useIsFocused()) {
    videoTitle = route.params.params.videoTitle;
    videoFileName = route.params.params.videoFileName;

    switch (videoFileName) {
      case "video1": require(`../../assets/videos/video1.mp4`); break;
    }
  }

  console.log(loadedVideo);

  return (
    <View style={GlobalStyles.mainContainer}>
      <Header title={videoTitle} backAction="true" navigation={navigation} />

      <View style={{ ...GlobalStyles.column, ...GlobalStyles.center, ...GlobalStyles.flex }}>
        <Video
          ref={video}
          style={styles.video}
          source={loadedVideo}
          useNativeControls
          resizeMode="contain"
          isLooping
        //onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        {/* <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View> */}
      </View>
    </View>
  );
}