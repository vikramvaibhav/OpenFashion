import React, { memo } from 'react';
import { SafeAreaView, View } from 'react-native';

import styles from './ScreenStyle';

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
};

export default memo(Screen);
