import { View } from 'react-native';
import React, { memo } from 'react';
import styles from './DividerStyle';

const Divider = ({ style }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.dividerLine} />
            <View style={styles.square} />
            <View style={styles.dividerLine} />
        </View>
    );
};

export default memo(Divider);