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
  headerView: {
    height: (height / 100) * 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleView: {
    height: (height / 100) * 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    overflow: 'hidden',
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
    height: (height / 100) * 8,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    height: (height / 100) * 35,
    // backgroundColor: 'red',
  },
  view5: {
    height: (height / 100) * 95,
    //  backgroundColor: 'blue',
    alignItems: 'center',
    // justifyContent: 'space-between',
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
  view7: {
    height: moderateScale(80),
    width: (width / 100) * 95,
    backgroundColor: 'white',
    borderRadius: 30,
    overflow: 'hidden',
    flexDirection: 'row',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userView: {
    height: (height / 100) * 25,
    // backgroundColor: 'green',
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
    backgroundColor: 'green',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonContainer2: {
    height: (height / 100) * 10,
    width: (width / 100) * 100,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  button: {
    height: moderateScale(50),
    width: moderateScale(360),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  firstnametext: {
    marginRight: moderateScale(297),
    marginBottom: 5,
    marginTop: 5,
    fontSize: Theme.fontSizes.xxmedium,
  },
  nametext: {
    marginRight: moderateScale(324),
    marginBottom: 5,
    marginTop: 5,
    fontSize: Theme.fontSizes.xxmedium,
  },
  mobiletext: {
    marginRight: moderateScale(259),
    marginBottom: 5,
    marginTop: 5,
    fontSize: Theme.fontSizes.xxmedium,
  },
  confrmtext: {
    marginRight: moderateScale(325),
    marginBottom: 5,
    marginTop: 5,
    fontSize: Theme.fontSizes.xxmedium,
  },
  passwordtext: {
    marginRight: moderateScale(315),
    marginBottom: 5,
    marginTop: 5,
    fontSize: Theme.fontSizes.xmedium,
    
  },
});
export default Styles;
