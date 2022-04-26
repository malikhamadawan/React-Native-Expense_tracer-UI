import React from 'react';
import {View, Dimensions, Text, TextInput,ScrollView,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '../../../Theme/Dimensions';
import MaskedView from '@react-native-masked-view/masked-view';
import Theme from '../../../Theme/Theme';
const {height, width} = Dimensions.get('window');
import Styles from '../styles/Styles';
export const SignUp = () => {
  return (
    <View style={Styles.container}>
        <ScrollView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0.3}}
        colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}>
        <View style={Styles.headerView}>
          <Text
            style={{
              fontSize: 65,
              color: 'white',
              fontFamily: 'MsMadi-Regular',
            }}>
            Expense Tracer
          </Text>
        </View>
        {/* middle mainView */}
        <View style={Styles.middleView}>
          {/* SignUp View */}
          <View style={Styles.view2}>
            <Text style={Styles.text}>SIGN UP</Text>
          </View>
          <View style={Styles.view5}>
              {/* first name */}
            <MaskedView
              maskElement={
                <Text style={Styles.firstnametext}>First Name</Text>
              }>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}>
                <Text style={Styles.firstnametext}>First Name</Text>
              </LinearGradient>
            </MaskedView>
            <View style={Styles.view4}>
              <TextInput
                placeholder="Enter you first name"
                style={{
                  marginLeft: 15,
                }}
              />
            </View>

            {/* last name */}
            <MaskedView
              maskElement={
                <Text style={Styles.firstnametext}>Last Name</Text>
              }>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}>
                <Text style={Styles.firstnametext}>Last Name</Text>
              </LinearGradient>
            </MaskedView>
            <View style={Styles.view4}>
              <TextInput
                placeholder="Enter you last name"
                style={{
                  marginLeft: 15,
                }}
              />
            </View>
            {/* email id */}
            <MaskedView
              maskElement={
                <Text style={Styles.nametext}>Email Id</Text>
              }>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}>
                <Text style={Styles.nametext}>Email Id</Text>
              </LinearGradient>
            </MaskedView>
            <View style={Styles.view4}>
              <TextInput
                placeholder="Enter you email id"
                style={{
                  marginLeft: 15,
                }}
              />
            </View>
            {/* mobile no */}
            <MaskedView
              maskElement={
                <Text style={Styles.mobiletext}>Mobile Number</Text>
              }>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}>
                <Text style={Styles.mobiletext}>Mobile Number</Text>
              </LinearGradient>
            </MaskedView>
            <View style={Styles.view4}>
              <TextInput
                placeholder="Enter you mobile number"
                keyboardType='number-pad'
                style={{
                  marginLeft: 15,
                }}
              />
            </View>
            {/* password  */}
            <MaskedView
              maskElement={
                <Text style={Styles.passwordtext}>Password</Text>
              }>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}>
                <Text style={Styles.passwordtext}>Password</Text>
              </LinearGradient>
            </MaskedView>
            <View style={Styles.view4}>
              <TextInput
                placeholder="Enter your Password"
                secureTextEntry= {true}
                style={{
                  marginLeft: 15,
                }}
              />
            </View>
            {/* confrim  */}
            <MaskedView
              maskElement={
                <Text style={Styles.mobiletext}>Confirm</Text>
              }>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}>
                <Text style={Styles.confrmtext}>Confirm</Text>
              </LinearGradient>
            </MaskedView>
            <View style={Styles.view4}>
              <TextInput
                placeholder="Enter to confirm password "
                secureTextEntry={true}
                style={{
                  marginLeft: 15,
                }}
              />
            </View>
            <MaskedView
              maskElement={
                <Text style={Styles.confrmtext}>Add Card</Text>
              }>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}>
                <Text style={Styles.confrmtext}>Add Card</Text>
              </LinearGradient>
            </MaskedView>

            <TouchableOpacity style={Styles.view7}>
                <Text
                style={{
                    color: 'grey'
                }}
                >Add card here</Text>
            </TouchableOpacity>

          </View>
        </View>
      </LinearGradient>
      <View
      style={Styles.buttonContainer2}
      >
      <TouchableOpacity>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}
                    style={Styles.linearGradient}>
                    <View style={Styles.button}>
                      <Text style={Styles.text2}>SIGN UP</Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
                </View>
      </ScrollView>
    </View>
  );
};
