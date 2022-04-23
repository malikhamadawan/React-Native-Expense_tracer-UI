import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');
const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    linearGradient:{
        padding: 15,
    },
    linearView: {
        height: (height/100)*30,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default Styles