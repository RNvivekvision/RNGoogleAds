import React, { useEffect, useState } from 'react';
import {
  AdEventType,
  AppOpenAd,
  InterstitialAd,
  MaxAdContentRating,
  MobileAds,
  RewardedAd,
  RewardedAdEventType,
  RewardedInterstitialAd,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = TestIds.APP_OPEN;
const interstitialUnitId = TestIds.INTERSTITIAL;
const rewardedUnitId = TestIds.REWARDED;
const rewardedInterstitialUnitId = TestIds.REWARDED_INTERSTITIAL;
const keywords = ['fashion', 'clothing', 'Cookies', 'Brownies', 'Cupcakes'];

const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
  // keywords: keywords,
});
const interstitial = InterstitialAd.createForAdRequest(interstitialUnitId, {
  // keywords: keywords,
});
const rewarded = RewardedAd.createForAdRequest(rewardedUnitId, {
  // keywords: keywords,
});
const rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(
  rewardedInterstitialUnitId,
  // { keywords: keywords },
);

const useGoogleAds = () => {
  const [State, setState] = useState({ isLoading: 0 });

  useEffect(() => {
    // initializeMobileAds();
  }, []);

  useEffect(() => {
    const interstitialLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => setState(p => ({ ...p, isLoading: p.isLoading + 1 })),
    );

    const rewardedLoad = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => setState(p => ({ ...p, isLoading: p.isLoading + 1 })),
    );
    const rewardedEarn = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => console.log('rewardedEarn => ', reward),
    );

    const rewardedInterstitialLoad = rewardedInterstitial.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => setState(p => ({ ...p, isLoading: p.isLoading + 1 })),
    );
    const rewardedInterstitialEarn = rewardedInterstitial.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => console.log('rewardedInterstitialEarn => ', reward),
    );

    appOpenAd.load();
    interstitial.load();
    rewarded.load();
    rewardedInterstitial.load();

    return () => {
      interstitialLoaded();
      rewardedLoad();
      rewardedEarn();
      rewardedInterstitialLoad();
      rewardedInterstitialEarn();
    };
  }, []);

  return {
    appOpenAd,
    interstitial,
    rewarded,
    rewardedInterstitial,
    isLoading: State.isLoading < 3,
  };
};

const initializeMobileAds = async () => {
  try {
    await MobileAds().setRequestConfiguration({
      // Update all future requests suitable for parental guidance
      maxAdContentRating: MaxAdContentRating.PG,

      // Indicates that you want your content treated as child-directed for purposes of COPPA.
      tagForChildDirectedTreatment: true,

      // Indicates that you want the ad request to be handled in a
      // manner suitable for users under the age of consent.
      tagForUnderAgeOfConsent: true,

      // An array of test device IDs to allow.
      testDeviceIdentifiers: ['EMULATOR'],
    });
    const response = await MobileAds().initialize();
    console.log('Init MobileAds -> ', JSON.stringify(response, null, 2));
  } catch (e) {
    console.log('Error Initializing Mobile ads -> ', e);
  }
};

export default useGoogleAds;
