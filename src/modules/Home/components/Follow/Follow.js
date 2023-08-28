import { View, StyleSheet, ImageBackground } from 'react-native';
import React, { memo } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Instagram from '../../../../assets/images/Instagram.svg';

import typography from '../../../../config/Typography';
import colors from '../../../../config/Colors';
import instagramImage from '../../../../mocks/instagramImage.json';
import { AppText, ScreenTitle } from '../../../../components/atoms';

const Follow = () => {
  return (
    <View style={styles.container}>
      <ScreenTitle titleStyle={styles.title} divider={false}>
        Follow Us
      </ScreenTitle>
      <Instagram height={24} width={24} style={{ marginVertical: 10 }} />
      <View style={styles.instagramImageContainer}>
        {instagramImage.map(data => (
          <ImageBackground
            key={data.id}
            style={styles.instagramImage}
            source={{
              uri: `${data.image}`,
            }}>
            <AppText style={styles.usernameText}>{data.userName}</AppText>
          </ImageBackground>
        ))}
      </View>
    </View>
  );
};

export default memo(Follow);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    ...typography.title,
    textTransform: 'uppercase',
  },
  instagramImageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  instagramImage: {
    height: wp(41),
    width: wp(41),
    justifyContent: 'flex-end',
    marginHorizontal: wp(3),
    marginVertical: wp(3),
  },
  usernameText: {
    ...typography.body_l,
    color: colors.white,
    letterSpacing: wp(0.25),
    padding: wp(2),
  },
});
