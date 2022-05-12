import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import Styles from '../styles/Styles';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import {moderateScale} from '../../../Theme/Dimensions';
import {LinearTextGradient} from 'react-native-text-gradient';
import Theme from '../../../Theme/Theme';
import MaskedView from '@react-native-masked-view/masked-view';
export const SignIn = ({navigation}) => {
  const [uri, setUri] = useState('https://www.facebook.com/');
  return (
    <View style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0.3}}
          colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}>
          <View style={Styles.linearView}>
            <Text
              style={{
                fontSize: 65,
                color: 'white',
                fontFamily: 'MsMadi-Regular',
              }}>
              Expense Tracer
            </Text>
          </View>
          <View style={Styles.view}>
            {/* view2 */}
            <View style={Styles.view2}>
              <Text style={Styles.text}>SIGN IN</Text>
            </View>

            {/* view3 */}
            <View style={Styles.view3}>
              {/* userview */}
              <View style={Styles.userView}>
                {/* view4 */}
                <View style={Styles.view4}>
                  {/* innerView */}
                  <View style={Styles.innerView}>
                    <MaskedView
                      maskElement={<Icons name={'ios-person'} size={30} />}>
                      <LinearGradient
                        start={{x: 1, y: 0}}
                        end={{x: 1, y: 1}}
                        colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}>
                        <Icons name={'ios-person'} size={30} />
                      </LinearGradient>
                    </MaskedView>
                  </View>
                  <TextInput
                    placeholder="email id"
                    placeholderTextColor={'grey'}
                    color={'black'}
                  />
                </View>

                {/* view4(2) */}
                <View style={Styles.view4}>
                  {/* innerView */}
                  <View style={Styles.innerView}>
                    <MaskedView
                      maskElement={
                        <Icons name={'ios-lock-closed'} opacity={0} size={30} />
                      }>
                      <LinearGradient
                        start={{x: 1, y: 0}}
                        end={{x: 1, y: 1}}
                        colors={['#108DECFF', '#B054CBFF', '#E98B42FF']}>
                        <Icons name={'ios-lock-closed'} size={30} />
                      </LinearGradient>
                    </MaskedView>
                  </View>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={'grey'}
                    secureTextEntry={true}
                    color={'black'}
                  />
                </View>
                <TouchableOpacity>
                  <MaskedView
                    maskElement={
                      <Text style={Styles.text3}>Forgot Password..?</Text>
                    }>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}>
                      <Text style={Styles.text3}>Forgot Password..?</Text>
                    </LinearGradient>
                  </MaskedView>
                </TouchableOpacity>
              </View>

              <View style={Styles.buttonContainer}>
                <TouchableOpacity
               onPress={() => {
                navigation.navigate('MyTabs');
              }}
                >
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}
                    style={Styles.linearGradient}>
                    <View style={Styles.button}>
                      <Text style={Styles.text2}>SIGN IN</Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
                <View style={Styles.signUpview}>
                  <Text style={Styles.text4}>Still not connected? </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SignUp');
                    }}>
                    <MaskedView
                      maskElement={
                        <Text style={{fontSize: Theme.fontSizes.xmedium}}>
                          SignUp
                        </Text>
                      }>
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}>
                        <Text style={{fontSize: Theme.fontSizes.xmedium}}>
                          SignUp
                        </Text>
                      </LinearGradient>
                    </MaskedView>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* spacer */}
          <View style={Styles.spacer} />

          {/* spacer1 */}
          <View style={Styles.spacer1}>
            {/* innerSpacer */}
            <View style={Styles.innerSpacer}>
              {/* Gmail */}
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`http://www.gmail.com/`);
                }}>
                <Icons name={'logo-google'} color={'red'} size={35} />
              </TouchableOpacity>

              {/* Facebook */}
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`http://www.facebook.com/`);
                }}>
                <Icon name={'facebook'} color={'blue'} size={35} />
              </TouchableOpacity>

              {/* Twitter */}
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`http://www.twitter.com`);
                }}>
                <Icon name={'twitter'} color={'skyblue'} size={35} />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};
