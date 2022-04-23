import React from 'react';
import {View,Dimensions,Text} from 'react-native';
const {height,width} =Dimensions.get('window');
import Styles from '../styles/Styles';
import LinearGradient from 'react-native-linear-gradient';
export const SignIn =()=>{
    return(
        <View style={Styles.container}>
            <LinearGradient
            start={{x:0,y:0}}
            end={{x:1,y:1}}
            colors={['#178BE3FF','#B054CBFF','#E98B42FF']}
            style={Styles.linearGradient}
            >
                <View style={Styles.linearView}>
                    <Text
                    style={{
                        fontSize: 45,
                        color: 'white',
                        fontFamily: "WaterBrush-Regular",
                    }}
                    >Expense Tracer</Text>
                </View>
            </LinearGradient>
        </View>
    );
}