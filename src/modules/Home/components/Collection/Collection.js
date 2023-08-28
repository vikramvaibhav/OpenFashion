import React, { memo } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';


import colors from '../../../../config/Colors';
import typography from '../../../../config/Typography';
import { AppText, ScreenTitle } from '../../../../components/atoms';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Collection = () => {
  return (
    <>
      <ScreenTitle titleStyle={styles.titleText} divider={false}>
        Collections
      </ScreenTitle>
      <ImageBackground
        source={{
          uri: 'https://picsum.photos/400/240',
        }}
        resizeMode="cover"
        style={styles.collectionBanner}>
        <AppText style={styles.bannerMonthText}>October</AppText>
        <AppText style={styles.bannerCollectionText}>Collection</AppText>
      </ImageBackground>
      <View style={styles.autumnSection}>
        <ImageBackground
          source={{
            uri: 'https://picsum.photos/260/296',
          }}
          style={styles.autumnBanner}>
          <AppText
            style={[
              styles.bannerMonthText,
              { marginTop: 30, color: colors.body },
            ]}>
            Autumn
          </AppText>
          <AppText
            style={[styles.bannerCollectionText, { color: colors.body }]}>
            Collection
          </AppText>
        </ImageBackground>
      </View>
    </>
  );
};

export default memo(Collection);

const styles = StyleSheet.create({
  titleText: {
    ...typography.title,
    textTransform: 'uppercase',
  },
  collectionBanner: {
    height: wp(60),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerDateText: {
    ...typography.banner_home_date,
    fontSize: wp(40.5),
    color: colors.body,
    alignSelf: 'flex-end',
    paddingRight: wp(5),
  },
  bannerMonthText: {
    ...typography.banner_home,
    color: colors.offWhite,
    alignSelf: 'flex-end',
    paddingRight: wp(5),
  },
  bannerCollectionText: {
    ...typography.body_m,
    color: colors.offWhite,
    textTransform: 'uppercase',
    letterSpacing: wp(1.5),
    alignSelf: 'flex-end',
    paddingRight: wp(5),
  },
  autumnSection: {
    marginVertical: wp(10),
  },
  autumnBanner: {
    height: wp(74),
    width: wp(65),
    justifyContent: 'flex-start',
  },
});
