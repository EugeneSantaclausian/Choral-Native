import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation/mainStack';
import {StyleSheet, View} from 'react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
