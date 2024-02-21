import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { hp } from '../Theme';

const useFlatlistStyles = () => {
  const inset = useSafeAreaInsets();

  return {
    contentContainerStyle: {
      paddingTop: hp(1),
      paddingBottom: inset.bottom + hp(1),
    },
  };
};

export default useFlatlistStyles;
