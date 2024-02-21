import { Strings } from '../Constants';
import { NavRoutes } from '../Navigation';

const DummyData = {
  googleAdmob: {
    android_app_id: 'ca-app-pub-3940256099942544~3347511713',
    ios_app_id: 'ca-app-pub-3940256099942544~1458002511',
  },
  Screens: [
    {
      name: Strings.GoogleAds,
      navigate: NavRoutes.GoogleAds,
    },
  ],
  TypesOfAds: [
    {
      name: Strings.AppOpenAds,
    },
    {
      name: Strings.InterstitialAds,
    },
    {
      name: Strings.RewardAds,
    },
    {
      name: Strings.BannerAds,
    },
    {
      name: Strings.GAMAds,
    },
  ],
};

export default DummyData;
