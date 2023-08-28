import React, { memo } from 'react';

import { Screen } from '../../components/atoms';
import { NewArrival } from '../../modules/Home';

const HomeScreen = () => {
    return (
        <Screen>
            <NewArrival />
        </Screen>
    );
};

export default memo(HomeScreen);
