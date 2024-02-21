import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RNContainer } from '../Common';
import { Strings } from '../Constants';
import { DummyData } from '../Utils';
import { RenderScreens } from '../Components';
import { useFlatlistStyles } from '../Hooks';
import { getAdData } from '../Redux';

const Screens = ({ navigation }) => {
  const { contentContainerStyle } = useFlatlistStyles();
  const { AdData } = useSelector(({ AdReducer }) => AdReducer);
  const dispatch = useDispatch();

  // console.log('AdData -> ', JSON.stringify(AdData, null, 2));

  useEffect(() => {
    dispatch(getAdData());
  }, []);

  const onItemPress = item => {
    if (item.navigate) {
      navigation.navigate(item.navigate);
    }
  };

  return (
    <RNContainer headerTitle={Strings.Screens}>
      <FlatList
        data={DummyData.Screens}
        keyExtractor={(v, i) => String(i)}
        contentContainerStyle={contentContainerStyle}
        renderItem={({ item, index }) => (
          <RenderScreens item={item} index={index} onPress={onItemPress} />
        )}
      />
    </RNContainer>
  );
};

export default Screens;
