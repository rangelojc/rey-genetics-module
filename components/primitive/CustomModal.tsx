import React, { Component, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';

// Global Styles 
import { GlobalStyles } from '../styles/GlobalStyles';

// Custom Styles
const styles = StyleSheet.create({
    centeredView: {
      ...GlobalStyles.backdrop,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
});

// Props
interface CustomModalProps {
    animationType: string,
    content: any,
    isVisible: boolean,
    onDismiss: any,
    onRequestClose: any,
    onShow: any
}

// States
interface CustomModalStates {}

// TODO: Update Modal Styles
class CustomModal extends Component<CustomModalProps, CustomModalStates> {
    
    constructor(props: any){
        super(props); 
    }

    static defaultProps = {
        animationType: "fade", // slide, fade, none
        content: null,
        isVisible: false,
        onDismiss: null,
        onRequestClose: null,
        onShow: null
    }

    public render(){
        const { 
            animationType, 
            content, 
            isVisible, 
            onDismiss, 
            onRequestClose, 
            onShow 
        }:any = this.props;

        return (
            <Modal
                animationType={animationType}
                onRequestClose={onRequestClose}
                onShow={onShow}
                onDismiss={onDismiss}
                transparent={true}
                visible={isVisible}
            >
            {content}
            </Modal>
        )
    }
    
}

export default CustomModal;
