import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
import {MainScreen} from '../screen/mainScreen/MainScreen';
import {Dummy} from '../screen/dummy/Dummy';
import {Dummy1} from '../screen/dummy/Dummy1';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const CustomTabNAvigator = ({children, onPress}) => (
    <TouchableOpacity
      style={{
        top: -25,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
      }}
      onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0.3}}
        colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}
        style={{
            borderRadius: 35,
        }}
        >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {children}
      </View>
      </LinearGradient>
    </TouchableOpacity>
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#B054CBFF',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        //tabBarStyle: {backgroundColor: 'red'},
      }}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => (
            <Icons name="ios-add" color={'white'} size={45} />
          ),
          tabBarButton: props => <CustomTabNAvigator {...props} />,
        }}
      />
      <Tab.Screen
        name="Dummy"
        component={Dummy}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="ios-menu-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Dummy1"
        component={Dummy1}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="ios-person-outline" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
