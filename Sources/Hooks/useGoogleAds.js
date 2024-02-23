import React, { useEffect, useRef, useState } from 'react';
import {
  AdEventType,
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import { useSelector } from 'react-redux';

const keywords = ['fashion', 'clothing', 'Cookies', 'Brownies', 'Cupcakes'];

const useGoogleAds = () => {
  const [State, setState] = useState({ isLoading: 0 });
  const { AdData } = useSelector(({ AdReducer }) => AdReducer);
  const NativeAdRef = useRef();
  const Admob = AdData?.data?.placement?.Admob;

  const appOpenId = __DEV__ ? TestIds.APP_OPEN : Admob?.appOpen;
  const interstitialId = __DEV__ ? TestIds.INTERSTITIAL : Admob?.interstitial;
  const rewardId = __DEV__ ? TestIds.REWARDED : Admob?.rewarded;

  const appOpenAd = AppOpenAd.createForAdRequest(appOpenId);
  const interstitialAd = InterstitialAd.createForAdRequest(interstitialId);
  const rewardAd = RewardedAd.createForAdRequest(rewardId);

  useEffect(() => {
    const interstitialLoaded = interstitialAd.addAdEventListener(
      AdEventType.LOADED,
      () => setState(p => ({ ...p, isLoading: p.isLoading + 1 })),
    );

    const rewardedLoad = rewardAd.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => setState(p => ({ ...p, isLoading: p.isLoading + 1 })),
    );
    const rewardedEarn = rewardAd.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => console.log('rewardedEarn => ', reward),
    );

    appOpenAd.load();
    interstitialAd.load();
    rewardAd.load();

    return () => {
      interstitialLoaded();
      rewardedLoad();
      rewardedEarn();
    };
  }, []);

  return {
    appOpenAd,
    interstitialAd,
    rewardAd,
    Admob,
    NativeAdRef,
    isLoading: State.isLoading < 3,
  };
};

// const initializeMobileAds = async () => {
//   try {
//     await MobileAds().setRequestConfiguration({
//       // Update all future requests suitable for parental guidance
//       maxAdContentRating: MaxAdContentRating.PG,

//       // Indicates that you want your content treated as child-directed for purposes of COPPA.
//       tagForChildDirectedTreatment: true,

//       // Indicates that you want the ad request to be handled in a
//       // manner suitable for users under the age of consent.
//       tagForUnderAgeOfConsent: true,

//       // An array of test device IDs to allow.
//       testDeviceIdentifiers: ['EMULATOR'],
//     });
//     const response = await MobileAds().initialize();
//     console.log('Init MobileAds -> ', JSON.stringify(response, null, 2));
//   } catch (e) {
//     console.log('Error Initializing Mobile ads -> ', e);
//   }
// };

export default useGoogleAds;
