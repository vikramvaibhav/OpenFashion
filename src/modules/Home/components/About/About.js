import { View, StyleSheet } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Logo from '../../../../assets/images/Logo.svg';
import FastShipping from '../../../../assets/images/FastShipping.svg';
import Sustainable from '../../../../assets/images/Sustainable.svg';
import UniqueDesign from '../../../../assets/images/UniqueDesign.svg';
import BestInBusiness from '../../../../assets/images/BestInBusiness.svg';
import Ribbon from '../../../../assets/images/Ribbon.svg';

import colors from '../../../../config/Colors';
import typography from '../../../../config/Typography';
import { AppText, Divider } from '../../../../components/atoms';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo height={"39"} width={"97"} />
        <AppText style={styles.aboutText}>
          Making a luxurious lifestyle accessible for a generous group of women
          is our daily drive.
        </AppText>
        <Divider />
      </View>
      <View style={styles.keyFeatureContainer}>
        <View style={styles.keyFeatureItem}>
          <FastShipping height={"35"} width={"50"} />
          <AppText style={styles.keyFeatureText}>
            Fast shipping. Free on orders over $25.
          </AppText>
        </View>
        <View style={styles.keyFeatureItem}>
          <Sustainable height={"35"} width={"50"} />
          <AppText style={styles.keyFeatureText}>
            Sustainable process from start to finish.
          </AppText>
        </View>
        <View style={styles.keyFeatureItem}>
          <UniqueDesign height={"35"} width={"50"} />
          <AppText style={styles.keyFeatureText}>
            Unique designs and high-quality materials.
          </AppText>
        </View>
        <View style={styles.keyFeatureItem}>
          <BestInBusiness height={"35"} width={"50"} />
          <AppText style={styles.keyFeatureText}>
            Saw cheaper, get 50% off.
          </AppText>
        </View>
      </View>
      <Ribbon height={"40"} width={"66"} style={{ marginVertical: 25 }} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.aboutBackground,
    width: '100%',
    alignItems: 'center',
    marginVertical: wp(5),
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: wp(7),
  },
  aboutText: {
    ...typography.subTitle_m,
    marginVertical: wp(4),
    paddingHorizontal: wp(10),
  },
  keyFeatureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  keyFeatureItem: {
    marginVertical: wp(4.5),
    width: '40%',
    alignItems: 'center',
    paddingHorizontal: wp(2.5),
  },
  keyFeatureText: {
    ...typography.subTitle_m,
    textAlign: 'center',
  },
});
