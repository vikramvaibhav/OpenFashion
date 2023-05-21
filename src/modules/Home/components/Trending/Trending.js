import { View, StyleSheet } from 'react-native';
import React, { memo } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import typography from '../../../../config/Typography';
import { Chip, ScreenTitle } from '../../../../components/atoms';
import trendingChipLabel from '../../../../mocks/trendingChipLabel.json';

const Trending = () => {
  return (
    <>
      <ScreenTitle titleStyle={styles.title} divider={false}>
        @Trending
      </ScreenTitle>
      <View style={styles.chipContainer}>
        {trendingChipLabel.map(data => (
          <Chip key={data.id} label={data.label} style={styles.chip} />
        ))}
      </View>
    </>
  );
};

export default memo(Trending);

const styles = StyleSheet.create({
  title: {
    ...typography.title,
    textTransform: 'uppercase',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: wp(2),
  },
  chip: {
    marginVertical: wp(2),
  },
});
