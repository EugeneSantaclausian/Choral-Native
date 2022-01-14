//Button Row Component for Navigation from HomeScreen

import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function HomeNavs() {
  const navigation = useNavigation();

  return (
    <View style={styles.navs}>
      <TouchableOpacity style={styles.leftNav}>
        <LinearGradient
          useAngle={true}
          angle={135}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['#6ee07f', '#55d88b', '#3dcf96']}
          style={styles.linearGradient}>
          <Image
            style={styles.navIcon}
            source={require('../../assets/images/creativity.png')}
          />
          <Text style={styles.navText}>Screens</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.rightNav}
        onPress={() => navigation.navigate('Onboarding')}>
        <LinearGradient
          useAngle={true}
          angle={135}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['#64c0e8', '#54afff', '#52a4ef']}
          style={styles.linearGradient}>
          <Image
            style={styles.navIcon}
            source={require('../../assets/images/magic-wand.png')}
          />
          <Text style={styles.navText}>Animations</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navs: {
    marginVertical: '5%',
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  navIcon: {
    width: 60,
    height: 60,
  },

  navText: {
    marginVertical: '10%',
    color: '#fff',
    fontSize: 15,
    fontFamily: 'NexaText-Trial-Regular',
  },

  leftNav: {
    alignSelf: 'center',
    width: windowWidth / 2.5,
    height: windowHeight / 5,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },

  linearGradient: {
    paddingHorizontal: '10%',
    paddingVertical: '20%',
    width: windowWidth / 2.5,
    height: windowHeight / 5,
    borderRadius: 20,
  },

  rightNav: {
    alignSelf: 'center',
    width: windowWidth / 2.5,
    height: windowHeight / 5,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
});
