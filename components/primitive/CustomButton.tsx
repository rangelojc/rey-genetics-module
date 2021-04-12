import React, { Component } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap"
    },
    active: {
        opacity: 0.7
    }
});

interface CustomButtonProps {
    onPress: any,
    onPressOut: any,
    onLongPress: any,
    buttonStyle: any,
    textStyle: any,
    text: string,
    size: string
}

interface CustomButtonState {
    isPressed: boolean
}

class CustomButton extends Component<CustomButtonProps, CustomButtonState> {
    
    constructor(props: any){
       super(props); 

       this.state = {
           isPressed: false
       }

       this.togglePressed = this.togglePressed.bind(this);
       this.onPressOut = this.onPressOut.bind(this);
    }

    static defaultProps = {
        buttonStyle: {},
        onPress: null,
        onPressOut: null,
        onLongPress: null,
        textStyle: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "700"
        },
        text: '',
        size: 'medium'
    }

    public togglePressed(){
        this.setState({ isPressed: !this.state.isPressed });
    }

    public onPressOut(){
        const { onPressOut }:any = this.props;
        onPressOut ? onPressOut(): null; 
        this.togglePressed();
    }

    public render(){
        const { isPressed }:any = this.state;
        const { buttonStyle, onPress, onLongPress, text, textStyle }: any = this.props;
        return (
            <Pressable
                style={{ 
                    ...styles.button, 
                    ...buttonStyle, 
                    ...(isPressed ? styles.active : {})
                }}
                onPressIn={this.togglePressed}
                onPress={onPress}
                onPressOut={this.onPressOut}
                onLongPress={onLongPress}>
                <Text style={textStyle}>{text}</Text>
            </Pressable>
        )
    }
}

export default CustomButton;