import { StyleSheet } from 'react-native';

import { GlobalStyles } from './GlobalStyles';

// TODO: Create color variables
export const ButtonStyles = StyleSheet.create({
    primary: {
        backgroundColor: '#2675ff'
    },
    primaryText: {
        color: '#FFFFFF'
    },
    disabled: {
        backgroundColor: "#cccccc"
    },
    disabledText: {
        color: "#f5f5f5"
    },
    defaultButton: {
        height: 58,
        borderRadius: 6,
        marginTop: 32
    },
    defaultButtonText: {
        color: "#f5f5f5",
        fontSize: 18,
        ...GlobalStyles.fontBold
    },
    linkButton: {
        ...GlobalStyles.fontRegular,
        fontSize: 16,
        color: "#666666",
        marginTop: 12
    },
    linkButtonUnderlined: {
        ...GlobalStyles.fontRegular,
        ...GlobalStyles.hyperlink,
        fontSize: 16,
        color: "#666666",
        marginLeft: 5
    }
});

