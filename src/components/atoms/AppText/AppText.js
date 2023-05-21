import React, { memo } from 'react';
import { Text } from 'react-native';

import defaultStyle from '../../../config/Styles';

const AppText = ({ children, style }) => {
    return <Text style={[defaultStyle.text, style]}>{children}</Text>;
};

export default memo(AppText);
