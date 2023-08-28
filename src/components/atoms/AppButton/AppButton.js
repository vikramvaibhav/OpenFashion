import { Pressable } from 'react-native';
import React from 'react';
import styles from './AppButtonStyle';
import AppText from '../AppText';

const AppButton = ({ disabled = false, title, titleStyle, style, onPress }) => {
    return (
        <Pressable
            style={[styles.button, style]}
            onPress={onPress}
            disabled={disabled}>
            <AppText style={[styles.buttonText, titleStyle]}>{title}</AppText>
        </Pressable>
    );
};

export default AppButton;
