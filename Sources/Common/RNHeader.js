import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import RNText from './RNText';
import RNStyles from './RNStyles';

const RNHeader = ({
  title,
  onLeftPress,
  LeftIcon,
  onRightPress,
  RightIcon,
  containerStyle,
  titleStyle,
  children,
}) => {
  const navigation = useNavigation();
  const styles = useStyles();
  return (
    <View style={RNStyles.container}>
      <View style={[styles.Container, containerStyle]}>
        {LeftIcon ? (
          <TouchableOpacity
            onPress={() =>
              onLeftPress ? onLeftPress?.() : navigation.goBack()
            }
            style={styles.Left}>
            <Image
              source={LeftIcon}
              resizeMode={'contain'}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.Left} />
        )}
        <RNText style={[styles.title, titleStyle]}>{title}</RNText>
        {RightIcon ? (
          <TouchableOpacity onPress={onRightPress} style={styles.Right}>
            <Image
              source={RightIcon}
              resizeMode={'contain'}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.Right} />
        )}
      </View>
      {children}
    </View>
  );
};

const useStyles = () => {
  const inset = useSafeAreaInsets();

  return StyleSheet.create({
    Container: {
      ...RNStyles.flexRowBetween,
      backgroundColor: Colors.White,
      paddingVertical: hp(1.5),
      paddingHorizontal: wp(3),
      paddingTop: inset.top + hp(1.5),
      borderBottomWidth: 1,
      borderBottomColor: Colors.Placeholder,
    },
    Left: {
      ...RNStyles.center,
      width: wp(6),
      height: wp(6),
    },
    title: {
      flex: 1,
      textAlign: 'center',
      paddingHorizontal: hp(1),
      marginHorizontal: hp(1),
      fontSize: FontSize.font18,
      fontFamily: FontFamily.SemiBold,
    },
    Right: {
      ...RNStyles.center,
      width: wp(6),
      height: wp(6),
    },
    icon: {
      ...RNStyles.image90,
    },
  });
};

export default RNHeader;
