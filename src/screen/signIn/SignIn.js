import React from 'react';
import { View, Dimensions, Text, Image, ScrollView, TextInput,TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window');
import Styles from '../styles/Styles';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons'
import { moderateScale } from '../../../Theme/Dimensions';
export const SignIn = () => {
    return (
        <View style={Styles.container}>
            <ScrollView>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0.3 }}
                    colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}
                >
                    <View style={Styles.linearView}>
                        <Text
                            style={{
                                fontSize: 65,
                                color: 'white',
                                fontFamily: 'MsMadi-Regular',
                            }}
                        >Expense Tracer</Text>
                    </View>
                    <View style={Styles.view} >
                        {/* view2 */}
                        <View style={Styles.view2} >
                            <Text style={Styles.text}>SIGN IN</Text>
                        </View>
                        {/* view3 */}
                        <View style={Styles.view3} >
                            {/* view4 */}
                            <View
                                style={Styles.userView}
                            >
                                <View style={Styles.view4}>
                                    {/* innerView */}
                                    <View style={Styles.innerView} >
                                        <Icons name={'ios-person'} color={'black'} size={30} />
                                    </View>
                                    <TextInput placeholder='User name' placeholderTextColor={'grey'} />
                                </View>
                                <View style={Styles.view4}>
                                    {/* innerView */}
                                    <View style={Styles.innerView} >
                                        <Icons name={'ios-lock-closed'} color={'black'} size={30} />
                                    </View>
                                    <TextInput placeholder='Password' placeholderTextColor={'grey'} />
                                </View>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        marginLeft: moderateScale(220),
                                        color: 'black',
                                    }}
                                >Forgot Password..?</Text>
                            </View>

                            <TouchableOpacity style={Styles.buttonContainer}  >
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}
                                    style={Styles.linearGradient}
                                >
                                    <View style={Styles.button}>



                                        <Text style={Styles.text2} >SIGN IN</Text>

                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>


        </View>
    );
}