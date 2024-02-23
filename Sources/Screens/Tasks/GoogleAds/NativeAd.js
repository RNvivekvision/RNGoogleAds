import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import NativeAdView, {
  AdvertiserView,
  CallToActionView,
  HeadlineView,
  IconView,
  StarRatingView,
  StoreView,
  TaglineView,
} from 'react-native-admob-native-ads';
import { RNText } from '../../../Common';
import { FontFamily, hp, wp } from '../../../Theme';

const NativeAd = ({ nativeAdId }) => {
  const NativeAdRef = useRef();

  useEffect(() => {
    NativeAdRef.current.loadAd();
  }, []);

  return (
    nativeAdId && (
      <NativeAdView
        ref={NativeAdRef}
        adUnitID={nativeAdId}
        onAdFailedToLoad={e => console.log('Error Native Ads -> ', e)}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            borderWidth: 1,
          }}>
          <View
            style={{
              height: 100,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              maxWidth: '100%',
            }}>
            <IconView
              style={{
                width: 60,
                height: 60,
              }}
            />
            <View
              style={{
                paddingHorizontal: 6,
                flexShrink: 1,
              }}>
              <HeadlineView
                hello="abc"
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'black',
                }}
              />
              <TaglineView
                numberOfLines={2}
                style={{
                  fontSize: 11,
                  color: 'black',
                }}
              />
              <AdvertiserView
                style={{
                  fontSize: 10,
                  color: 'gray',
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <StoreView
                  style={{
                    fontSize: 12,
                    color: 'black',
                  }}
                />
                <StarRatingView
                  starSize={12}
                  fullStarColor="orange"
                  emptyStarColor="gray"
                  style={{
                    width: 65,
                    marginLeft: 10,
                  }}
                />
              </View>
            </View>

            <CallToActionView
              style={[
                {
                  minHeight: 45,
                  paddingHorizontal: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 10,
                  maxWidth: 100,
                  width: 80,
                  backgroundColor: '#FFA500',
                  borderRadius: 10,
                },
              ]}
              buttonAndroidStyle={{
                backgroundColor: '#FFA500',
                borderRadius: 10,
              }}
              allCaps
              textStyle={{
                fontSize: 13,
                flexWrap: 'wrap',
                textAlign: 'center',
                color: 'white',
              }}
            />
          </View>
        </View>

        {/* <View style={styles.container}>
          <RNText family={FontFamily.Bold} pBottom={hp(2)}>
            {'Here is your Native Add'}
          </RNText>

          <HeadlineView
            style={{
              fontWeight: 'bold',
              fontSize: 13,
              color: 'black',
            }}
          />

          <TaglineView
            numberOfLines={2}
            style={{
              fontSize: 15,
              color: 'black',
            }}
          />

          <AdvertiserView
            style={{
              fontSize: 10,
              color: 'gray',
            }}
          />

          <StoreView
            style={{
              fontSize: 12,
              color: 'black',
            }}
          />

          <StarRatingView
            starSize={15}
            fullStarColor="orange"
            emptyStarColor="black"
            style={{
              width: 65,
              marginLeft: 10,
            }}
          />

          <CallToActionView
            style={[
              {
                minHeight: 45,
                paddingHorizontal: 12,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 10,
                maxWidth: 100,
                width: 80,
              },
              Platform.OS === 'ios'
                ? {
                    backgroundColor: '#FFA500',
                    borderRadius: 10,
                  }
                : {},
            ]}
            buttonAndroidStyle={{
              backgroundColor: '#FFA500',
              borderRadius: 10,
            }}
            allCaps
            textStyle={{
              fontSize: 13,
              flexWrap: 'wrap',
              textAlign: 'center',
              color: 'white',
            }}
          />

          <IconView
            style={{
              width: 60,
              height: 60,
            }}
          />
        </View> */}
      </NativeAdView>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: wp(4),
    marginVertical: hp(1),
  },
});

export default NativeAd;
