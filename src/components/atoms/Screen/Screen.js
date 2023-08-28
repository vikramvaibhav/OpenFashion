import React, { memo } from 'react';
import { View } from 'react-native';

import styles from './ScreenStyle';

const Screen = ({ children, style }) => {
    return (
        <View style={[styles.screen, style]}>{children}</View>
    );
};

export default memo(Screen);
