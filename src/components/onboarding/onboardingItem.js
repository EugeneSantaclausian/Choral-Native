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

const windowHeight = Dimensions.get('window').height;
const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        {width, backgroundColor: colorScheme === 'light' ? '#fff' : '#272930'},
      ]}>
      <View
        style={{
          paddingLeft: '5%',
          paddingTop: '20%',
        }}>
        <Text style={[styles.header, {color: '#EC4969'}]}>{item.title}</Text>
        <Text
          style={[
            styles.subtext,
            {marginTop: 0, color: colorScheme === 'light' ? '#5e5e5e' : '#fff'},
          ]}>
          {item.subtext}
        </Text>
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
