import React, { Suspense } from 'react';
import { AppText } from './src/components/atoms';
import HomeScreen from './src/containers/HomeScreen/HomeScreen';
import BlogListScreen from './src/containers/BlogListScreen/BlogListScreen';

const App = () => {
  return (
    <>
      <Suspense fallback={<AppText>Loading...</AppText>}>
        <HomeScreen />
      </Suspense>
    </>
  );
};

export default App;
