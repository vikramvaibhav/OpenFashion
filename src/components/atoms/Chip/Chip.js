import { Pressable } from 'react-native';
import React from 'react';
import styles from './ChipStyle';
import AppText from '../AppText';

const Chip = ({ labelStyle, style, onPress, label }) => {
    return (
        <Pressable style={[styles.chip, style]} onPress={onPress}>
            <AppText style={[styles.chipLable, labelStyle]}>{label}</AppText>
        </Pressable>
    );
};

export default Chip;