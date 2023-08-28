import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../AppText';
import Divider from '../Divider';

const ScreenTitle = ({ children, style, titleStyle, divider = true }) => {
  return (
    <View style={[styles.container, style]}>
      <AppText style={titleStyle}>{children}</AppText>
      {divider && <Divider />}
    </View>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
