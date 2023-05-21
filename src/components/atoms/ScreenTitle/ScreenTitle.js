import { View, StyleSheet } from 'react-native';
import React, { lazy, memo } from 'react';

const AppText = lazy(() => import('../AppText'));
const Divider = lazy(() => import('../Divider'));

const ScreenTitle = ({ children, style, titleStyle, divider = true }) => {
  return (
    <View style={[styles.container, style]}>
      <AppText style={titleStyle}>{children}</AppText>
      {divider && <Divider />}
    </View>
  );
};

export default memo(ScreenTitle);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
