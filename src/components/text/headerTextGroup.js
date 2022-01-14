import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HeaderTextGroup({
  header,
  subHeader,
  headerColor,
  subHeaderColor,
  componentStyle,
}) {
  return (
    <View style={componentStyle}>
      <Text style={[styles.header, {color: headerColor}]}>{header}</Text>
      <Text style={[styles.subheader, {color: subHeaderColor, opacity: 0.7}]}>
        {subHeader}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontFamily: 'NexaText-Trial-Regular',
  },

  subheader: {
    fontSize: 15,
    fontFamily: 'NexaText-Trial-Light',
  },
});
