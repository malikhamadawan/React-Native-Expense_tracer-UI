import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from '../../../Theme/Dimensions';
import Theme from '../../../Theme/Theme';
const {height, width} = Dimensions.get('window');
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
  linearGradient: {
    borderRadius: 30,
    elevation: 5,
  },
  linearView: {
    height: (height / 100) * 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    height: (height / 100) * 49,
    width: (width / 100) * 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    overflow: 'hidden',
  },
  view2: {
    height: (height / 100) * 12,
    //  backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    height: (height / 100) * 35,
    // backgroundColor: 'red',
  },

  view4: {
    height: moderateScale(50),
    width: (width / 100) * 95,
    backgroundColor: 'white',
    borderRadius: 30,
    overflow: 'hidden',
    flexDirection: 'row',
    elevation: 5,
  },
  signUpview: {
    height: (height / 100) * 4,
    width: (width / 100) * 100,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  innerView: {
    height: moderateScale(50),
    width: moderateScale(70),
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userView: {
    height: (height / 100) * 25,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  spacer: {
    height: (height / 100) * 10,
    width: width,
    backgroundColor: 'white',
  },
  spacer1: {
    height: (height / 100) * 10,
    width: (width / 100) * 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerSpacer: {
    height: (height / 100) * 10,
    width: (width / 100) * 50,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  text: {
    fontSize: Theme.fontSizes.xbig,
    color: 'black',
  },
  text2: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'white',
  },
  text4: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'black',
  },
  text3: {
    fontSize: 16,
    marginLeft: moderateScale(220),
  },
  buttonContainer: {
    height: (height / 100) * 12,
    width: (width / 100) * 100,
    // backgroundColor: 'green',
    alignItems: 'center',
    overflow: 'hidden',
  },
  button: {
    height: moderateScale(50),
    width: moderateScale(360),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
export default Styles;
