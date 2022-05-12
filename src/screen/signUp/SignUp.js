import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '../../../Theme/Dimensions';
import MaskedView from '@react-native-masked-view/masked-view';
import ImagePicker from 'react-native-image-crop-picker';
import Theme from '../../../Theme/Theme';
const {height, width} = Dimensions.get('window');
import Styles from '../styles/Styles';
import {
  setfName,
  setlName,
  setEmail,
  setMobileNo,
  setPassword,
  setConfrimPassword,
} from '../../redux/actions';
import {useDispatch} from 'react-redux';
export const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(require('../../assets/bkimage.png'));
  const [image, setImage] = useState('');
  const [data, setData] = useState('Add card here');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [emailid, setemailid] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [password, setpassword] = useState('');
  const [confrimpassword, setconfrimpassword] = useState('');

  const setValues = () => {
    dispatch(setfName(firstname));
    dispatch(setlName(lastname));
    dispatch(setEmail(emailid));
    dispatch(setMobileNo(mobilenumber));
    dispatch(setPassword(password));
    dispatch(setConfrimPassword(confrimpassword));
  };
  const onSelectImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    });
  };
  const onSelectCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      setImage(image.path);
      setData();
    });
  };
  return (
    <View style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <View style={Styles.view8}>
                <TextInput
                  placeholder="Enter you first name"
                  onChangeText={value => {
                    setfirstname(value);
                  }}
                  value={firstname}
                  style={{
                    marginLeft: 15,
                  }}
                />
              </View>

              {/* last name */}
              <View style={Styles.view8}>
                <TextInput
                  placeholder="Enter you last name"
                  onChangeText={value => {
                    setlastname(value);
                  }}
                  value={lastname}
                  style={{
                    marginLeft: 15,
                  }}
                />
              </View>
              {/* email id */}
              <View style={Styles.view8}>
                <TextInput
                  placeholder="Enter you email id"
                  onChangeText={value => {
                    setemailid(value);
                  }}
                  value={emailid}
                  style={{
                    marginLeft: 15,
                  }}
                />
              </View>
              {/* mobile no */}
              <View style={Styles.view8}>
                <TextInput
                  placeholder="Enter you mobile number"
                  onChangeText={value => {
                    setmobilenumber(value);
                  }}
                  value={mobilenumber}
                  keyboardType="number-pad"
                  style={{
                    marginLeft: 15,
                  }}
                />
              </View>
              {/* password  */}
              <View style={Styles.view8}>
                <TextInput
                  placeholder="Enter your Password"
                  onChangeText={value => {
                    setpassword(value);
                  }}
                  value={password}
                  secureTextEntry={true}
                  style={{
                    marginLeft: 15,
                  }}
                />
              </View>
              {/* confrim  */}
              <View style={Styles.view8}>
                <TextInput
                  placeholder="Enter to confirm password "
                  onChangeText={value => {
                    setconfrimpassword(value);
                  }}
                  value={confrimpassword}
                  secureTextEntry={true}
                  style={{
                    marginLeft: 15,
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Alert....', 'Select One Option', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                    },
                    {
                      text: 'Camera',
                      onPress: () => onSelectCamera(),
                    },
                    {text: 'Gallery', onPress: () => onSelectImage()},
                  ]);
                }}
                style={Styles.view7}>
                <ImageBackground
                  source={image === '' ? text : {uri: image}}
                  style={{
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'grey',
                    }}>
                    {setImage === 'image' ? setData : data}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <View style={Styles.buttonContainer2}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
              setValues();
            }}>
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
