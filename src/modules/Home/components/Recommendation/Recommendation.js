import { FlatList, Image, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import React from 'react';

import colors from '../../../../config/Colors';
import typography from '../../../../config/Typography';
import newArrival from '../../../../mocks/newArrival.json';
import { AppText, ScreenTitle } from '../../../../components/atoms';

const Recommendation = () => {
  return (
    <>
      <ScreenTitle titleStyle={styles.sectionTitle}>Just for You</ScreenTitle>
      <FlatList
        data={newArrival}
        renderItem={({ item }) => (
          <View style={[styles.container]}>
            <Image
              source={{
                width: wp(63.5),
                height: wp(77.75),
                uri: `${item.image}`,
              }}
            />
            <AppText style={styles.title}>{item.title}</AppText>
            <AppText style={styles.price}>{item.price}</AppText>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
  sectionTitle: {
    ...typography.title,
    textTransform: 'uppercase',
  },
  container: {
    width: wp(63.5),
    alignItems: 'center',
    marginHorizontal: wp(2),
    marginVertical: wp(6.25),
  },
  title: {
    ...typography.body_l,
    textAlign: 'center',
  },
  price: {
    ...typography.body_l,
    color: colors.primary,
  },
});
