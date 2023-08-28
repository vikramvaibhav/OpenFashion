import 'react-native-gesture-handler';
import React, { Suspense } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppText } from './src/components/atoms';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Suspense fallback={<AppText>Loading...</AppText>}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </Suspense>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})