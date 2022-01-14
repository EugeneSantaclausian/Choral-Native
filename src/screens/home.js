import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderTextGroup from '../components/text/headerTextGroup';
import HomeNavs from '../components/buttons/homeNavs';
import MiniHomeNavs from '../components/buttons/miniHomeNavs';

export default function Home() {
  const {width} = useWindowDimensions();
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          width,
        },
      ]}>
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
        <StatusBar
          barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
          backgroundColor={colorScheme === 'light' ? '#f4f6f9' : '#31333b'}
        />
        <View
          style={{
            paddingLeft: '5%',
            paddingTop: '20%',
          }}>
          <HeaderTextGroup
            header={'Explore Coral Native'}
            subHeader={'Select a Component'}
            headerColor={colorScheme === 'light' ? '#393b40' : '#fff'}
            subHeaderColor={colorScheme === 'light' ? '#5e5e5e' : '#fff'}
          />
        </View>

        <HomeNavs />

        <View
          style={{
            paddingTop: '5%',
          }}>
          <Text
            style={[
              styles.subheader,
              {
                color: colorScheme === 'light' ? '#393b40' : '#fff',
                paddingLeft: '5%',
                paddingBottom: '5%',
              },
            ]}>
            UI Components
          </Text>

          <MiniHomeNavs
            firstItemText={'Typography'}
            firstItemImg={require('../assets/images/alphabet.png')}
            secondItemText={'Buttons'}
            secondItemImg={require('../assets/images/click.png')}
            lastItemText={'Inputs'}
            lastItemImg={require('../assets/images/keyboard.png')}
          />
          <MiniHomeNavs
            firstItemText={'CheckBoxes'}
            firstItemImg={require('../assets/images/checkbox.png')}
            secondItemText={'Charts'}
            secondItemImg={require('../assets/images/bar-chart.png')}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subheader: {
    fontSize: 17,
    fontFamily: 'NexaText-Trial-Regular',
  },

  subtext: {
    fontSize: 15,
    fontFamily: 'NexaText-Trial-Light',
  },
});
