import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import PrimaryButton from './src/components/primarybutton';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#EC4969" barStyle={'dark-content'} />
      <Image
        style={styles.routeImage}
        source={require('./src/assets/images/navigation.png')}
      />
      <Text style={styles.header}>Get Started</Text>
      <Text style={styles.subtext}>
        With Coral Native, You can get Started quickly with your React Native
        App with ease.
      </Text>
      <PrimaryButton
        styles={styles.button}
        buttonText={styles.buttonText}
        Text="Next"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30,
    fontFamily: 'NexaText-Trial-Black',
    color: 'black',
    marginLeft: '10%',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#EC4969',
    width: '30%',
    alignSelf: 'center',
    marginTop: '4%',
    paddingVertical: '4%',
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 5,
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'NexaText-Trial-Regular',
    fontSize: 15,
    textAlign: 'center',
  },

  subtext: {
    fontSize: 16,
    fontFamily: 'NexaText-Trial-Light',
    color: 'black',
    marginHorizontal: '10%',
    marginTop: '5%',
    fontWeight: '600',
  },
  routeImage: {
    marginTop: '20%',
    alignSelf: 'center',
    width: '90%',
    height: '50%',
  },
});

export default App;
