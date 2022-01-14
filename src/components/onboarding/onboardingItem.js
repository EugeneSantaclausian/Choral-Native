import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Dimensions,
  useColorScheme,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderTextGroup from '../text/headerTextGroup';

const windowHeight = Dimensions.get('window').height;
const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, {width}]}>
      <LinearGradient
        useAngle={true}
        angle={135}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={
          colorScheme === 'light'
            ? ['#fbfdfe', '#e3ebf2', '#eff7fb']
            : ['#31333b', '#30343d', '#31343d']
        }
        style={styles.container}>
        <View
          style={{
            paddingLeft: '5%',
            paddingTop: '20%',
          }}>
          <HeaderTextGroup
            header={item.title}
            subHeader={item.subtext}
            headerColor={colorScheme === 'light' ? '#393b40' : '#fff'}
            subHeaderColor={colorScheme === 'light' ? '#5e5e5e' : '#fff'}
          />
        </View>

        <Image style={styles.routeImage} source={item.image} />
        <View
          style={{
            paddingHorizontal: '5%',
          }}>
          <Text
            style={[
              styles.subtext,
              {color: colorScheme === 'light' ? '#5e5e5e' : '#fff'},
            ]}>
            {item.body}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontFamily: 'NexaText-Trial-Black',
  },
  subtext: {
    fontSize: 15,
    fontFamily: 'NexaText-Trial-Light',
  },
  routeImage: {
    alignSelf: 'center',
    width: '90%',
    height: windowHeight / 2,
  },
});

export default OnboardingItem;
