import { Platform } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Fonts from './Fonts';

const fontFamily = {
  fontFamily: Platform.OS === 'android' ? Fonts.TenorSans : 'Avenir Light',
};

export default {
  title: {
    fontWeight: '400',
    fontSize: wp(4.5),
    lineHeight: wp(10),
    letterSpacing: wp(1),
    ...fontFamily,
  },
  subTitle_l: {
    fontWeight: '400',
    fontSize: wp(4),
    lineHeight: wp(6),
    ...fontFamily,
  },
  subTitle_m: {
    fontWeight: '400',
    fontSize: wp(3.5),
    lineHeight: wp(5),
    ...fontFamily,
  },
  body_xl: {
    fontWeight: '400',
    fontSize: wp(4),
    lineHeight: wp(6),
    ...fontFamily,
  },
  body_l: {
    fontWeight: '400',
    fontSize: wp(3.75),
    lineHeight: wp(6),
    ...fontFamily,
  },
  body_m: {
    fontWeight: '400',
    fontSize: wp(3.5),
    lineHeight: wp(6),
    ...fontFamily,
  },
  body_s: {
    fontWeight: '400',
    fontSize: wp(3),
    lineHeight: wp(4.5),
    ...fontFamily,
  },
  banner_home: {
    fontSize: wp(9.5),
    lineHeight: wp(10.75),
    fontFamily:
      Platform.OS === 'android'
        ? Fonts.BodoniModa_Italic
        : 'Bodoni 72 Book Italic',
    letterSpacing: wp(0.3),
    opacity: 0.7,
  },
  banner_home_date: {
    fontSize: wp(40.5),
    lineHeight: wp(41.25),
    fontFamily:
      Platform.OS === 'android'
        ? Fonts.BodoniModa_Italic
        : 'Bodoni 72 Book Italic',
    letterSpacing: wp(-5),
    opacity: 0.8,
  },
};
