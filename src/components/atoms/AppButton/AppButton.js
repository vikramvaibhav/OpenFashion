import { Pressable } from 'react-native';
import React, { lazy, memo } from 'react';
import styles from './AppButtonStyle';

const AppText = lazy(() => import('../AppText'));

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

export default memo(AppButton);
