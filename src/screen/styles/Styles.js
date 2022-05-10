import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from '../../../Theme/Dimensions';
import Theme from '../../../Theme/Theme';
const {height, width} = Dimensions.get('window');
const Styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
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
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
  view8: {
    height: moderateScale(70),
    width: (width / 100) * 95,
    backgroundColor: 'white',
    borderRadius: 30,
    overflow: 'hidden',
    flexDirection: 'row',
    elevation: 5,
  },
  view7: {
    height: moderateScale(150),
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
    // backgroundColor: 'green',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonContainer2: {
    height: (height / 100) * 12,
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
  mainScreenHeader: {
    height: (height / 100) * 13,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  mainScreenLeft: {
    height: (height / 100) * 13,
    width: (width / 100) * 30,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainScreenRight: {
    height: (height / 100) * 13,
    width: (width / 100) * 30,
    // backgroundColor: 'red',
    // alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: moderateScale(130),
  },
  cardView: {
    height: (height / 100) * 35,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transView: {
    height: (height / 100) * 7,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatView: {
    height: (height / 100) * 45,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BurgerView: {
    height: (height / 100) * 10,
    width: (width / 100) * 95,
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: moderateScale(6),
    elevation: 5,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  ImageView: {
    height: (height / 100) * 8,
    width: (height / 100) * 8,
    borderRadius: 45,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginLeft: moderateScale(10),
  },
  StoreView: {
    height: (height / 100) * 8,
    width: (height / 100) * 8,
    borderRadius: 45,
    backgroundColor: '#9D47A7',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginLeft: moderateScale(10),
  },
  cartView: {
    height: (height / 100) * 8,
    width: (height / 100) * 8,
    borderRadius: 45,
    backgroundColor: '#C95252',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginLeft: moderateScale(10),
  },
  flightView: {
    height: (height / 100) * 8,
    width: (height / 100) * 8,
    borderRadius: 45,
    backgroundColor: '#3A9573',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginLeft: moderateScale(10),
  },
  TravelView: {
    height: (height / 100) * 10,
    width: (width / 100) * 55,
    // backgroundColor: 'green',
    justifyContent: 'center',
  },
  TextViews: {
    height: (height / 100) * 10,
    width: (width / 100) * 25,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 70,
    width: 50,
  },
  iconView: {
    height: 55,
    width: 55,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  JohnText: {
    fontSize: Theme.fontSizes.xmedium,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 40,
  },
  WelcomeText: {
    fontSize: Theme.fontSizes.xbig,
    color: 'grey',
    // marginRight: moderateScale(75),
  },
  Transcationtext: {
    fontSize: Theme.fontSizes.xxmedium,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: moderateScale(10),
  },
  ViewAllText: {
    marginLeft: moderateScale(220),
    fontSize: Theme.fontSizes.xmedium,
    color: '#527BAA',
    // marginTop: moderateScale(10),
  },
  AllText :{
    fontSize: Theme.fontSizes.xmedium,
    color: 'black',
    marginLeft: moderateScale(5),
  },
});
export default Styles;
