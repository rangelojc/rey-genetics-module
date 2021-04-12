import React, { Component } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

// Global Styles 
import { GlobalStyles } from '../styles/GlobalStyles';

// Components
import { AngleDownIcon } from './Icons';

const styles = StyleSheet.create({
    select: {
        ...GlobalStyles.row,
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 12,
        borderColor: '#e1e1e1',
        height: 36,
        marginRight: 4,
        borderRadius: 4
    },
    title: {
        ...GlobalStyles.fontMedium,
        color: '#222222',
        fontSize: 16,
        marginRight: 4
    },
    selectPressed: {
        backgroundColor: "#f6f6f6"
    }
})

interface CustomSelectProps {
    caretEnabled: boolean,
    style: any,
    textStyles: any,
    title: string,
    onPress: any
}

interface CustomSelectStates {
    isPressed: boolean
}

class CustomSelect extends Component<CustomSelectProps, CustomSelectStates> {
    
    constructor(props: any){
        super(props);
        this.onPressed = this.onPressed.bind(this);

        this.state = {
            isPressed: false
        }
    }

    static defaultProps: any = {
        caretEnabled: true,
        style: {},
        textStyle: {},
        title: "",
        onPress: null
    }

    public onPressed(){
        const { isPressed }: any = this.state;
        this.setState({ isPressed: !isPressed });
    }

    public render(){
        const { isPressed }: any = this.state;
        const { caretEnabled, onPress, title, style, textStyle  }:any = this.props;
        
        return (
            <Pressable style={{...styles.select, ...style, ...( isPressed ? styles.selectPressed : {} )}} 
                onPress={onPress} 
                onPressIn={this.onPressed}
                onPressOut={this.onPressed}>
                <Text style={{...styles.title, ...textStyle}}>{title}</Text>
                { caretEnabled ? <AngleDownIcon /> : null }
            </Pressable>
        )
    }
}

export default CustomSelect;