import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const PrimaryButton = props => {
  return (
    <View>
      <TouchableOpacity style={props.styles} onPress={props.onPress}>
        <Text style={props.buttonText}>{props.Text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: 'NexaText-Trial-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default PrimaryButton;
