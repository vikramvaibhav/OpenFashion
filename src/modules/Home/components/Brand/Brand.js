import { View, StyleSheet } from 'react-native';
import React, { memo } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Prada from '../../../../assets/images/Prada.svg';
import Burberry from '../../../../assets/images/Burberry.svg';
import Boss from '../../../../assets/images/Boss.svg';
import Cartier from '../../../../assets/images/Cartier.svg';
import Gucci from '../../../../assets/images/Gucci.svg';
import Tiffany from '../../../../assets/images/Tiffany.svg';
import { Divider } from '../../../../components/atoms';

const Brand = () => {
  return (
    <>
      <Divider style={styles.divider} />
      <View style={styles.container}>
        <Prada height={11} width={70} style={styles.icon} />
        <Burberry height={7} width={98} style={styles.icon} />
        <Boss height={20} width={52} style={styles.icon} />
        <Cartier height={20} width={72} style={styles.icon} />
        <Gucci height={14} width={94} style={styles.icon} />
        <Tiffany height={12} width={98} style={styles.icon} />
      </View>
      <Divider style={styles.divider} />
    </>
  );
};

export default memo(Brand);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '79%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginVertical: wp(5),
    marginHorizontal: wp(1.25),
  },
  divider: {
    marginVertical: wp(8.25),
  },
});
