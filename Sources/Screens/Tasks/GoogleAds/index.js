import React, { useState } from 'react';
import { ScrollView } from 'react-native';
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
  const { appOpenAd, interstitialAd, rewardAd, Admob } = useGoogleAds();
  const [State, setState] = useState({ bannerAd: false, gamAd: false });
  const bannerId = __DEV__ ? TestIds.ADAPTIVE_BANNER : Admob?.banner;

  const showAds = async method => {
    try {
      console.log(`isLoaded ->  `, method.loaded);
      if (method.loaded) {
        method.show();
      } else {
        method.load();
        setTimeout(() => {
          showAds(method);
        }, 2000);
      }
    } catch (e) {
      console.log('Erro Show Error -> ', e);
    }
  };

  const methods = {
    0: () => showAds(appOpenAd),
    1: () => showAds(interstitialAd),
    2: () => showAds(rewardAd),
    3: () => setState(p => ({ ...p, bannerAd: !p.bannerAd })),
    4: () => setState(p => ({ ...p, gamAd: !p.gamAd })),
  };

  const onItemPress = (v, i) => methods[i]();

  return (
    <RNContainer headerTitle={Strings.GoogleAds} LeftIcon={Images.Back}>
      <ScrollView>
        {State.bannerAd && (
          <BannerAd
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            unitId={bannerId}
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
