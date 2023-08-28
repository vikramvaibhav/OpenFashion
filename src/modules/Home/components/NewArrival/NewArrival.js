import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import About from '../About';
import Banner from '../Banner';
import Collection from '../Collection';
import Recommendation from '../Recommendation';
import Trending from '../Trending';
import Follow from '../Follow';
import Brand from '../Brand';

import colors from '../../../../config/Colors';
import typography from '../../../../config/Typography';
import newArrival from '../../../../mocks/newArrival.json';
import { AppButton, ScreenTitle } from '../../../../components/atoms';
import { Footer } from '../../../../components/organisms';
import NewArrivalCard from '../../../../components/molecules/ProductCard/NewArrivalCard/NewArrivalCard';

const NewArrival = () => {
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Banner />
          <ScreenTitle
            style={styles.newArrivalTitleContainer}
            titleStyle={styles.newArrivalTitle}>
            New Arrival
          </ScreenTitle>
        </>
      }
      data={newArrival}
      renderItem={data => (
        <NewArrivalCard
          style={{ marginVertical: wp(2.5), marginHorizontal: wp(3.75) }}
          item={data.item}
        />
      )}
      keyExtractor={item => item.id}
      numColumns={2}
      ListFooterComponent={
        <>
          <View style={{ alignItems: 'center' }}>
            <AppButton
              title="Explore More"
              style={styles.exploreButton}
              titleStyle={styles.exploreButtonTitle}
            />
            <Brand />
            <Collection />
            <Recommendation />
            <Trending />
            <About />
            <Follow />
          </View>
          <Footer />
        </>
      }
    />
  );
};

export default NewArrival;

const styles = StyleSheet.create({
  newArrivalTitleContainer: {
    marginVertical: wp(7.5),
  },
  newArrivalTitle: {
    ...typography.title,
    textTransform: 'uppercase',
  },
  exploreButton: {
    backgroundColor: colors.offWhite,
  },
  exploreButtonTitle: {
    color: colors.titleActive,
    ...typography.subTitle_l,
  },
});
