import React from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {moderateScale} from '../../../Theme/Dimensions';
import Theme from '../../../Theme/Theme';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Styles from '../styles/Styles';
const {height, width} = Dimensions.get('window');
export const MainScreen = ({navigation}) => {
  return (
    <View style={Styles.mainScreenContainer}>
      <View style={Styles.mainScreenHeader}>
        <View
          style={{
            height: (height / 100) * 13,
            width: (width / 100) * 20,
            // backgroundColor: 'red',
            overflow: 'hidden',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/image2.png')}
            style={{height: 60, width: 60}}
          />
        </View>
        <View style={Styles.mainScreenLeft}>
          <Text style={Styles.WelcomeText}>Welcome!</Text>
          <Text style={Styles.JohnText}>John Doee</Text>
        </View>
        <View style={Styles.mainScreenRight}>
          <View style={Styles.iconView}>
            <TouchableOpacity>
              <Icons name={'ios-cog-outline'} color={'grey'} size={35} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={Styles.cardView}>
        <Image
          style={{
            height: 240,
            width: 500,
          }}
          source={require('../../assets/card.png')}
          // resizeMode={'center'}
        />
      </View>
      <View style={Styles.transView}>
        <Text style={Styles.Transcationtext}>Transactions</Text>
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate('DetailScreen')
        }}
        >
          <Text style={Styles.ViewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.flatView}>
          {/* BurgerView */}
          <View style={Styles.BurgerView}>
            <View style={Styles.ImageView}>
              <Image
                style={Styles.image}
                source={require('../../assets/burger.png')}
              />
            </View>
            <View style={Styles.TravelView}>
              <Text style={Styles.AllText}>Food</Text>
            </View>
            <View style={Styles.TextViews}>
              <Text style={Styles.AllText}>-$45.00</Text>
              <Text>Today</Text>
            </View>
          </View>

          {/* ShoppingView */}
          <View style={Styles.BurgerView}>
            <View style={Styles.StoreView}>
              <Icon name={'shopping-bag'} color={'white'} size={30} />
            </View>
            <View style={Styles.TravelView}>
              <Text style={Styles.AllText}>Shopping</Text>
            </View>
            <View style={Styles.TextViews}>
              <Text style={Styles.AllText}>-$280.00</Text>
              <Text>Today</Text>
            </View>
          </View>

          {/* EntertainmentView */}

          <View style={Styles.BurgerView}>
            <View style={Styles.cartView}>
              <Icons name={'cart'} color={'white'} size={35} />
            </View>
            <View style={Styles.TravelView}>
              <Text style={Styles.AllText}>Entertainment</Text>
            </View>
            <View style={Styles.TextViews}>
              <Text style={Styles.AllText}>-$60.00</Text>
              <Text>Yesterday</Text>
            </View>
          </View>

          {/* TravelView */}
          <View style={Styles.BurgerView}>
            <View style={Styles.flightView}>
              <MaterialIcons name={'flight'} color={'white'} size={35} />
            </View>
            <View style={Styles.TravelView}>
              <Text style={Styles.AllText}>Travel</Text>
            </View>
            <View style={Styles.TextViews}>
              <Text style={Styles.AllText}>-$250.00</Text>
              <Text>Yesterday</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
