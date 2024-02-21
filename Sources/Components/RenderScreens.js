import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, FontFamily, hp, wp } from '../Theme';
import { RNText } from '../Common';

const RenderScreens = ({ item, index, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onPress?.(item, index)}
      style={styles.container}>
      <RNText family={FontFamily.Medium}>{item.name}</RNText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.Placeholder,
    marginHorizontal: wp(4),
    marginVertical: hp(1),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    borderRadius: wp(2),
  },
});

export default RenderScreens;
