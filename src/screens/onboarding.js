import React, {useState, useRef} from 'react';
import {StyleSheet, View, FlatList, StatusBar} from 'react-native';
import OnboardingItem from '../components/onboarding/onboardingItem';
import OnboardingData from '../components/onboarding/onboardingData';
import PrimaryButton from '../components/primarybutton';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Paginator = () => {
  return (
    <View
      style={{
        width: '18%',
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50,
      }}>
      {/*<View
        style={{
          width: 15,
          height: 5,
          backgroundColor: '#EC4969',
          paddingVertical: '0.25%',
          borderRadius: 10,
        }}
      />*/}
      {OnboardingData.map(item => {
        return (
          <View
            key={item.id}
            style={{
              width: 7,
              height: 7,
              backgroundColor: '#edbec7',
              paddingVertical: '0.25%',
              borderRadius: 10,
            }}
          />
        );
      })}
    </View>
  );
};

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onboardingRef = useRef();

  const scrollToNext = () => {
    if (currentIndex < OnboardingData.length - 1) {
      onboardingRef.current.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
      onboardingRef.current.scrollToIndex({index: 0});
    }
  };

  const updateIndex = () => {
    console.log('CURRENT', onboardingRef.current.index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={OnboardingData}
        bounces={false}
        renderItem={({item}) => <OnboardingItem item={item} key={item.id} />}
        //onScrollEndDrag={updateIndex}
        ref={onboardingRef}
      />
      <Paginator />
      <View style={styles.buttonView}>
        <PrimaryButton
          onPress={scrollToNext}
          styles={styles.button}
          buttonText={styles.buttonText}
          Text={
            currentIndex < OnboardingData.length - 1 ? (
              <Icon name="right" size={20} color="#fff" />
            ) : (
              <IonIcon name="ios-home" size={20} color="#fff" />
            )
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: '#EC4969',
    paddingVertical: '7%',
    paddingHorizontal: '7%',
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 5,
  },
  buttonView: {
    width: '100%',
    paddingVertical: '10%',
    paddingHorizontal: '10%',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Onboarding;
