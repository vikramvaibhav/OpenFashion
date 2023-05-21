import { FlatList, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import blogListData from '../../../../mocks/blogListData.json';
import blogCategories from '../../../../mocks/blogCategories.json';

import colors from '../../../../config/Colors';
import { Footer } from '../../../../components/organisms';
import ListCard from '../../../../components/atoms/BlogCard/ListCard';
import { AppButton, Chip } from '../../../../components/atoms';

const BlogList = () => {
    return (
        <>
            <View style={{ flexDirection: 'row' }}>
                <FlatList
                    data={blogCategories}
                    renderItem={data => (
                        <Chip style={styles.chip} label={data.item.category} />
                    )}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <FlatList
                data={blogListData}
                renderItem={data => <ListCard item={data.item} />}
                keyExtractor={item => item.id}
                ListFooterComponent={
                    <>
                        <View style={styles.buttonContainer}>
                            <AppButton
                                title="Load More"
                                style={styles.buttonStyle}
                                titleStyle={styles.buttonTitleStyle}
                            />
                        </View>
                        <Footer />
                    </>
                }
            />
        </>
    );
};

export default memo(BlogList);

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        marginTop: wp(5)
    },
    buttonStyle: {
        backgroundColor: 'transparent',
        borderColor: colors.border,
        borderWidth: 1,
    },
    buttonTitleStyle: {
        color: colors.titleActive,
    },
    chip: {
        marginHorizontal: wp(1.25),
        marginVertical: wp(1.25),
    },
});
