import React, { memo } from 'react';

import { Header } from '../../components/organisms';
import { Screen } from '../../components/atoms';
import { NewArrival } from '../../modules/Home';


const HomeScreen = () => {
    return (
        <Screen>
            <Header />
            <NewArrival />
        </Screen>
    );
};

export default memo(HomeScreen);
