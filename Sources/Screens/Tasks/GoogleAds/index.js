import React, { useState } from 'react';
import { Button, ScrollView } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  GAMBannerAd,
  TestIds,
} from 'react-native-google-mobile-ads';
import { RNContainer } from '../../../Common';
import { RenderScreens } from '../../../Components';
import { Images, Strings } from '../../../Constants';
import { useGoogleAds } from '../../../Hooks';
import { DummyData } from '../../../Utils';

const GoogleAds = ({ navigation }) => {
  const { appOpenAd, interstitial, rewarded, rewardedInterstitial } =
    useGoogleAds();
  const [State, setState] = useState({
    isLoading: 0,
    bannerAd: false,
    gamAd: false,
  });

  const showAds = async method => {
    try {
      console.log(`isLoaded ->  `, method.loaded);
      if (method.loaded) {
        await method.show();
      } else {
        await method.load();
      }
    } catch (e) {
      console.log('Erro Show Error -> ', e);
    }
  };

  const methods = {
    0: () => showAds(appOpenAd),
    1: () => showAds(interstitial),
    2: () => showAds(rewarded),
    3: () => showAds(rewardedInterstitial),
    4: () => setState(p => ({ ...p, bannerAd: true })),
    5: () => setState(p => ({ ...p, gamAd: true })),
  };

  const onItemPress = (item, index) => methods[index]();

  return (
    <RNContainer
      // isLoading={isLoading}
      headerTitle={Strings.GoogleAds}
      LeftIcon={Images.Back}>
      <ScrollView>
        {State.bannerAd && (
          <BannerAd
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            unitId={TestIds.BANNER}
            // 'ca-app-pub-3940256099942544/6300978111'
            onPaid={e => console.log('BannerAd onPaid -> ', e)}
            onAdFailedToLoad={error => {
              console.log('Error BannerAd -> ', error);
            }}
          />
        )}

        {State.gamAd && (
          <GAMBannerAd
            unitId={TestIds.GAM_BANNER}
            sizes={[BannerAdSize.MEDIUM_RECTANGLE]}
            onAdFailedToLoad={e => {
              console.log('Error GAMBannerAd -> ', e);
            }}
          />
        )}

        {DummyData.TypesOfAds.map((item, index) => (
          <RenderScreens
            key={index}
            item={item}
            index={index}
            onPress={onItemPress}
          />
        ))}
      </ScrollView>
    </RNContainer>
  );
};

export default GoogleAds;
