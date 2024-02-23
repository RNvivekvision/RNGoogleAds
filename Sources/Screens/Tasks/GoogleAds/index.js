import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  GAMBannerAd,
  TestIds,
} from 'react-native-google-mobile-ads';
import { RNContainer, RNText } from '../../../Common';
import { RenderScreens } from '../../../Components';
import { Images, Strings } from '../../../Constants';
import { useGoogleAds } from '../../../Hooks';
import { DummyData } from '../../../Utils';
import NativeAd from './NativeAd';

const GoogleAds = ({ navigation }) => {
  const { appOpenAd, interstitialAd, rewardAd, Admob } = useGoogleAds();
  const [State, setState] = useState({ bannerAd: false, gamAd: false });
  const bannerId = __DEV__ ? TestIds.ADAPTIVE_BANNER : Admob?.banner;
  console.log({ Admob });
  const nativeAdId = __DEV__
    ? 'ca-app-pub-3940256099942544/2247696110'
    : Admob?.nativeAdvanced;

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

        {[
          ...DummyData.TypesOfAds,
          ...DummyData.TypesOfAds,
          ...DummyData.TypesOfAds,
          ...DummyData.TypesOfAds,
        ].map((item, index) => {
          return index % 5 == 0 ? (
            <NativeAd nativeAdId={nativeAdId} />
          ) : (
            <RenderScreens
              key={index}
              item={item}
              index={index}
              onPress={(v, i) => methods[i]()}
            />
          );
        })}

        <NativeAd nativeAdId={nativeAdId} />
      </ScrollView>
    </RNContainer>
  );
};

export default GoogleAds;
