import React, {useRef,useEffect} from 'react';
import {View,Image,Dimensions,Animated} from 'react-native';
import Styles  from '../styles/Styles';
const {height,width}=Dimensions.get('window');
export const Splash =({navigation})=>{
    const fadeAnim= useRef(new Animated.Value(0)).current;
    useEffect(() => {
       Animated.sequence([
        Animated.timing(fadeAnim,{
            duration: 5000,
            toValue: 5,
            delay: 5,
            useNativeDriver: false,
        })
    ]).start()
        setTimeout(() => {
          navigation.replace('SignIn');
        }, 3000);
      });
    return(
        <View style={Styles.mainContainer}>
            <Animated.Image source={require('../../assets/image.png')} style={{opacity:fadeAnim }} />
        </View>
    );
}