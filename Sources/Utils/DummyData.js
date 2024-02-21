import { Strings } from '../Constants';
import { NavRoutes } from '../Navigation';

const DummyData = {
  googleAdmob: {
    android: 'ca-app-pub-3940256099942544~3347511713',
    ios: 'ca-app-pub-3940256099942544~3347511713',
  },
  Screens: [
    {
      name: Strings.GoogleAds,
      navigate: NavRoutes.GoogleAds,
    },
  ],
  TypesOfAds: [
    {
      name: 'App Open Ads',
    },
    {
      name: 'Interstitial Ads',
    },
    {
      name: 'Rewarded Ads',
    },
    {
      name: 'Rewarded Interstitial Ads',
    },
    {
      name: 'Banner Ads',
    },
    {
      name: 'GAM Ads',
    },
  ],
};

export default DummyData;
