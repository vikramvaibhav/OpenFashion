import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import typography from '../../../../config/Typography';
import colors from '../../../../config/Colors';
import { AppText } from '../../../atoms';

const NewArrivalCard = ({ style }) => {
    return (
        <View style={[styles.container, style]}>
            <Image
                source={{
                    width: wp(41.25),
                    height: wp(50),
                    uri: `https://picsum.photos/165/200`,
                }}
            />
            <AppText style={styles.title}>21WN reversible angora cardigan</AppText>
            <AppText style={styles.price}>$120</AppText>
        </View>
    );
};

export default NewArrivalCard;

const styles = StyleSheet.create({
    container: {
        width: wp(41.25),
        alignItems: 'center',
    },
    title: {
        ...typography.body_s,
        textAlign: 'center',
    },
    price: {
        ...typography.body_l,
        color: colors.secondary,
    },
});
