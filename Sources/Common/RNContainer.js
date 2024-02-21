import React from 'react';
import { StatusBar, View } from 'react-native';
import { Colors } from '../Theme';
import RNLoader from './RNLoader';
import RNStyles from './RNStyles';
import RNHeader from './RNHeader';
const RNContainer = ({
  isLoading,
  children,
  style,
  barStyle,
  translucent,
  headerTitle,
  onLeftPress,
  LeftIcon,
  onRightPress,
  RightIcon,
  headerContainerStyle,
  headerTitleStyle,
}) => {
  return (
    <View style={RNStyles.container}>
      {/* <StatusBar
        barStyle={barStyle ?? 'default'}
        backgroundColor={Colors.Transparent}
        translucent={translucent ?? true}
      /> */}
      <RNHeader
        title={headerTitle}
        onLeftPress={onLeftPress}
        LeftIcon={LeftIcon}
        onRightPress={onRightPress}
        RightIcon={RightIcon}
        containerStyle={headerContainerStyle}
        titleStyle={headerTitleStyle}>
        <View style={[RNStyles.container, style]}>
          <RNLoader visible={isLoading} />
          {children}
        </View>
      </RNHeader>
    </View>
  );
};
export default RNContainer;
