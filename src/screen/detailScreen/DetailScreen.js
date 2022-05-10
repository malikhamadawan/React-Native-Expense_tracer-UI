import React from 'react';
import {View, Text, TouchableOpacity, Dimensions,ScrollView} from 'react-native';
import styles from '../detailScreen/styles';
import Styles from '../styles/Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import ICons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '../../../Theme/Dimensions';
import Theme from '../../../Theme/Theme';
const {height, width} = Dimensions.get('window');
export const DetailScreen = () => {
  return (
    <View style={styles.mainContainer}>
      {/* headerView */}
      <View style={styles.mainHeader}>
        <View style={styles.buttonView}>
          <TouchableOpacity>
            <Icons name={'arrow-back-circle'} color={'grey'} size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.textView}>Transactions</Text>
        <View style={styles.sliderButton}>
          <TouchableOpacity>
            <Icon name={'sliders'} color={'grey'} size={25} />
          </TouchableOpacity>
        </View>
      </View>
      {/* ButtonView */}
      <View style={styles.ButtonView}>
        <Text style={styles.incomeText}>Income</Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0.3}}
          colors={['#178BE3FF', '#B054CBFF', '#E98B42FF']}
          style={{
            borderRadius: 18,
            marginLeft: moderateScale(35),
          }}>
          <View style={styles.expensesView}>
            <Text style={styles.expensesText}>Expenses</Text>
          </View>
        </LinearGradient>
      </View>
      {/* TotalbalanceView */}
      <View style={styles.TotalView}>
        <Text style={styles.totalText}>Total Balance</Text>
        <Text style={styles.dollarText}>$2548.00</Text>
      </View>
      {/* shareView */}
      <View style={styles.additionView}>
        <View style={styles.cricleMainView}>
          <View style={styles.circleView}>
            <TouchableOpacity>
              <Icons name={'ios-add'} color={'grey'} size={35} />
            </TouchableOpacity>
          </View>
          <View style={styles.circleView}>
            <TouchableOpacity>
              <ICons name={'delete'} color={'grey'} size={35} />
            </TouchableOpacity>
          </View>
          <View style={styles.circleView}>
            <TouchableOpacity>
              <Icons name={'share-social'} color={'grey'} size={35} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.TextView}>
          <Text style={styles.AddText}>Add</Text>
          <Text style={styles.ClearText}>Clear</Text>
          <Text style={styles.shareText}>Share</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.flatView2}>
          {/* BurgerView */}
          <View style={styles.BurgerView2}>
            <View style={styles.HomeView}>
            <Icons name={'ios-home'} color={'white'} size={30} />
            </View>
            <View style={Styles.TravelView}>
              <Text style={Styles.AllText}>Home Rent</Text>
            </View>
            <View style={Styles.TextViews}>
              <Text>-$45.00</Text>
            </View>
          </View>

          {/* Pet Groom View */}
          <View style={styles.BurgerView2}>
            <View style={Styles.StoreView}>
              <ICons name={'pets'} color={'white'} size={30} />
            </View>
            <View style={Styles.TravelView}>
              <Text style={Styles.AllText}>Pet Groom</Text>
            </View>
            <View style={Styles.TextViews}>
              <Text>-$280.00</Text>
            </View>
          </View>

          {/* RechargeView */}

          <View style={styles.BurgerView2}>
            <View style={styles.rechargeView}>
              <Icons name={'phone-portrait-outline'} color={'white'} size={35} />
            </View>
            <View style={Styles.TravelView}>
              <Text style={Styles.AllText}>Recharge</Text>
            </View>
            <View style={Styles.TextViews}>
              <Text>-$60.00</Text>
            </View>
          </View>

          {/* FoodView */}
          <View style={styles.BurgerView2}>
            <View style={styles.FoodView}>
              <FontAwesome5 name={'hamburger'} color={'white'} size={30} />
            </View>
            <View style={Styles.TravelView}>
              <Text style={Styles.AllText} >Food</Text>
            </View>
            <View style={Styles.TextViews}>
              <Text>-$250.00</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
