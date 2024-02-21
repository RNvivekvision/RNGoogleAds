import { createAsyncThunk } from '@reduxjs/toolkit';
import FetchMethod from '../../Api/FetchMethod';
import URL from '../../Api/URL';

const Params = {
  logo: `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`,
  appName: 'Bass Boosted: equalizer',
  packageName: 'net.bass.booster.equalizers',
  apiKeyText: 'none',
  device: 'efa9f4155c753e13',
  keyForm: 'Debug',
  ipaddress: '43.251.72.59',
  version: '1',
};

const getAdData = createAsyncThunk('getAdData', async () => {
  try {
    const response = await FetchMethod.POST({
      EndPoint: URL.createAppRequest,
      NeedToken: false,
      Params: Params,
    });
    // console.log('getAdData -> ', JSON.stringify(response, null, 2));
    return response;
  } catch (e) {
    console.log('Error getAdData -> ', e);
    return e;
  }
});

export { getAdData };

// const form = new FormData();
// form.append('logo', data.logo);
// form.append('appName', data.appName);
// form.append('packageName', data.packageName);
// form.append('apiKeyText', data.apiKeyText);
// form.append('device', data.device);
// form.append('keyForm', data.keyForm);
// form.append('ipaddress', data.ipaddress);
// form.append('version', data.version);
