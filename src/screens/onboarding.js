import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  useWindowDimensions,
  Animated,
} from 'react-native';
import OnboardingItem from '../components/onboarding/onboardingItem';
import OnboardingData from '../components/onboarding/onboardingData';
import PrimaryButton from '../components/buttons/primarybutton';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions();

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
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 20, 8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i.toString()}
            style={{
              width: dotWidth,
              height: 7,
              backgroundColor: '#EC4969',
              marginHorizontal: 8,
              borderRadius: 10,
              opacity,
            }}
          />
        );
      })}
    </View>
  );
};

const Onboarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onboardingRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollToNext = () => {
    if (currentIndex < OnboardingData.length - 1) {
      onboardingRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      return navigation.navigate('Home');
    }
  };

  //Set the Ref for the Index Whenever the Flatlist Scrolls
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  //Value should change only when Next Slide Item is 50% on screen
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

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
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false, //This animation uses Width & the Native Driver does not Support Width
          },
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={onboardingRef}
      />
      <Paginator data={OnboardingData} scrollX={scrollX} />
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
