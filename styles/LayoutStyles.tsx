import { StyleSheet } from 'react-native';

import { GlobalStyles } from './GlobalStyles';

export const LayoutStyles = StyleSheet.create({
    bottom: {
        height: 65,
        ...GlobalStyles.center
    }
});
