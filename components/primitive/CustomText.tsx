import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

// TODO: Create global variables
// Custom Styles
const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: '#666666'
    }
});

interface CustomTextProps {
    text: string,
    type: string,
    style: any
}

class CustomText extends Component<CustomTextProps> {
    constructor(props: any) {
        super(props);
    }

    static defaultProps = {
        text: "",
        type: "regular",
        style: {}
    }

    public render() {
        const { text, type, style }: any = this.props;
        let fontFamily: string = "sf-pro-regular";

        switch (type) {
            case "regular":
                fontFamily = 'sf-pro-regular';
                break;
            case "medium":
                fontFamily = 'sf-pro-medium';
                break;
            case "bold":
                fontFamily = 'sf-pro-bold';
                break;
            case "semiBold":
                fontFamily = 'sf-pro-semibold';
                break;
            default:
                fontFamily = 'sf-pro-regular';
                break;
        }

        return (
            <Text style={{ fontFamily: fontFamily, ...styles.text, ...style }}>{text}</Text>
        )
    }
}

export default CustomText;
