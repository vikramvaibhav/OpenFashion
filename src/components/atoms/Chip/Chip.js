import { Pressable } from 'react-native';
import React, { lazy, memo } from 'react';
import styles from './ChipStyle';

const AppText = lazy(() => import('../AppText'));

const Chip = ({ labelStyle, style, onPress, label }) => {
    return (
        <Pressable style={[styles.chip, style]} onPress={onPress}>
            <AppText style={[styles.chipLable, labelStyle]}>{label}</AppText>
        </Pressable>
    );
};

export default memo(Chip);