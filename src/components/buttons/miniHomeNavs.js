//Mini Buttons Row Component on HomeScreen - 3 in a Row

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  useColorScheme,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const windowHeight = Dimensions.get('window').height;
export default function MiniHomeNavs({
  firstItemText,
  firstItemImg,
  secondItemText,
  secondItemImg,
  lastItemText,
  lastItemImg,
}) {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.buttonRow}>
      <TouchableOpacity
        style={{
          height: 0.18 * windowHeight,
          justifyContent: 'center',
        }}>
        <Image style={styles.icon} source={firstItemImg} />
        <Text
          style={[
            styles.text,
            {color: colorScheme === 'light' ? '#5e5e5e' : '#fff'},
          ]}>
          {firstItemText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 0.18 * windowHeight,
          justifyContent: 'center',
        }}>
        <Image style={styles.icon} source={secondItemImg} />
        <Text
          style={[
            styles.text,
            {color: colorScheme === 'light' ? '#5e5e5e' : '#fff'},
          ]}>
          {secondItemText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 0.18 * windowHeight,
          justifyContent: 'center',
        }}>
        <Image style={styles.icon} source={lastItemImg} />
        <Text
          style={[
            styles.text,
            {color: colorScheme === 'light' ? '#5e5e5e' : '#fff'},
          ]}>
          {lastItemText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  icon: {
    width: 40,
    height: 40,
  },

  text: {
    textAlign: 'center',
    marginVertical: '10%',
    fontSize: 13,
    fontFamily: 'NexaText-Trial-Regular',
  },
});
