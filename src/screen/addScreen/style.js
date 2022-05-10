import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from '../../../Theme/Dimensions';
import Theme from '../../../Theme/Theme';
const {height, width} = Dimensions.get('window');
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainButtonView:{
    height: (height / 100) * 45,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonContainer2: {
    height: (height / 100) * 12,
    width: (width / 100) * 100,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  linearGradient: {
    borderRadius: 30,
    elevation: 5,
  },
  button: {
    height: moderateScale(60),
    width: moderateScale(360),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text2: {
    fontSize: Theme.fontSizes.xxmedium,
    color: 'white',
  },
  AllView:{
    height: (height / 100) * 10,
    width: (width / 100) * 95,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  AllText:{
    marginLeft: moderateScale(35),
    fontSize: Theme.fontSizes.xxmedium,
    color: '#707A98',
  },
});
export default style;
