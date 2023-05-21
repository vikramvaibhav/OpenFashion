import { View, Image, StyleSheet } from 'react-native';
import React, { lazy, memo } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
const AppText = lazy(() => import('../../AppText'));

import typography from '../../../../config/Typography';
import colors from '../../../../config/Colors';


const ListCard = ({ item }) => {
    return (
        <View
            style={{
                flexDirection: 'column',
                flex: 1,
            }}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            width: 120,
                            height: 155,
                            uri: `${item.image}`,
                        }}
                    />
                </View>
                <View style={{ flex: 0.1 }} />
                <View style={styles.detailConatiner}>
                    <View style={styles.textContainer}>
                        <AppText style={styles.titleText}>{item.title}</AppText>
                    </View>
                    <View style={styles.textContainer}>
                        <AppText style={styles.shortDescriptionText}>
                            {item.shortSescription}
                        </AppText>
                    </View>
                    <View style={styles.textContainer}>
                        <AppText style={styles.blogInfoText}>{item.blogInfo}</AppText>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default memo(ListCard);

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(4),
        marginVertical: wp(2.5),
    },
    titleText: {
        ...typography.subTitle_m,
        color: colors.titleActive,
        letterSpacing: wp(0.5),
        textTransform: 'uppercase',
    },
    shortDescriptionText: {
        ...typography.body_m,
        letterSpacing: wp(0.5),
    },
    blogInfoText: {
        ...typography.body_s,
        color: colors.placeholder,
    },
    imageContainer: {
        flex: 1.1,
    },
    detailConatiner: {
        flex: 2,
    },
});
