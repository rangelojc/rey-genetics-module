import { Button } from "@ui-kitten/components";
import React, { useEffect, useState } from "react"
import { Modal, View } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';
import theme from "../theme/theme.json";

const styles = {
  modal: {
    backgroundColor: "",
  },
  close: {
    // backgroundColor: "transparent",
    // color: theme["color-primary-500"],
    // width: 100
    borderRadius: 0
  }
}

const ImageModal = (props: any) => {
  const [images, setImages] = useState<any>([]);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setImages(props.images)
  }, [props.images]);

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  return (
    <Modal visible={visible} transparent={true}>
      <ImageViewer imageUrls={images} onCancel={() => props.setVisibility(false)} enableSwipeDown={true} backgroundColor={"white"} />
      <Button style={styles.close} size="medium" onPress={() => props.setVisibility(false)}>Close</Button>
    </Modal>
  )
}

export default ImageModal;