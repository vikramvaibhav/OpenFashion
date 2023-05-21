import React, { memo } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import typography from '../../../../config/Typography';
import { AppButton, AppText } from '../../../../components/atoms';

const Banner = () => {
  return (
    <ImageBackground
      source={{ uri: `https://picsum.photos/375/600` }}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <View style={{ marginVertical: 180 }}>
        <AppText style={styles.bannerText}>LUXURY</AppText>
        <AppText style={[styles.bannerText, { marginLeft: 20 }]}>
          FASHION
        </AppText>
        <AppText style={styles.bannerText}>&ACCESSORIES</AppText>
      </View>
      <View style={{ marginVertical: 40 }}>
        <AppButton style={styles.exploreButton} title="Explore Collection" />
      </View>
    </ImageBackground>
  );
};

export default memo(Banner);

const styles = StyleSheet.create({
  backgroundImage: {
    height: hp(150),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerText: {
    ...typography.banner_home,
  },
  exploreButton: {
    borderRadius: wp(9.5),
    width: wp(62.5),
    opacity: 0.6,
  },
});
